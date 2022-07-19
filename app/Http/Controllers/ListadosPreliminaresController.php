<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Codigos;
use App\Models\ListadosPreliminares;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\HistorialController;

class ListadosPreliminaresController extends Controller
{
    public function create(Request $request) {   
        $rules = [
            'ID_DEPARTAMENTOS'=>'required|max:2',
            'ID_MUNICIPIOS'=>'required|max:3',
            'NOMBRE'=>'required|max:200',
            'UBICACION'=>'required|max:200',
            'ID_FUENTE'=>'required|numeric'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'state' => false,
                'errors' => $validator->errors()
            ]);
        }
        try {
            $ID_USUARIO = Auth::user()->ID_USUARIO;
            $codigos = new Codigos();
            $codigos->ID_MUNICIPIOS = $request->ID_MUNICIPIOS;
            $codigos->ID_DEPARTAMENTOS = $request->ID_DEPARTAMENTOS;
            $codigos->save();
            $ID_CODIGO = $codigos->ID_CODIGO;
            $listadosPreliminares = new ListadosPreliminares();
            $listadosPreliminares->ID_FUENTE = $request->ID_FUENTE;
            $listadosPreliminares->ID_USUARIO = $ID_USUARIO;
            $listadosPreliminares->ID_CODIGO = $ID_CODIGO;
            $listadosPreliminares->NOMBRE = $request->NOMBRE;
            $listadosPreliminares->UBICACION = $request->UBICACION;
            $listadosPreliminares->save();
            return response()->json([
                'state' => true
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'state' => false,
                'message' => 'Error en la base de datos',
                'phpMessage' => $th->getMessage(),
            ]);
        }
    }

    public function update(Request $request) {
        $rules = [
            'ID_LISTADO' => 'required|numeric',
            'ID_DEPARTAMENTOS'=>'required|max:2',
            'ID_MUNICIPIOS'=>'required|max:3',
            'NOMBRE'=>'required|max:200',
            'UBICACION'=>'required|max:200',
            'ID_FUENTE'=>'required|numeric',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'state' => false,
                'errors' => $validator->errors()
            ]);
        }
        $ID_USUARIO = Auth::user()->ID_USUARIO;
        try {
            $queryData = ListadosPreliminares::join("codigos","codigos.ID_CODIGO","=","listados_preliminares.ID_CODIGO")
            ->select("listados_preliminares.ID_USUARIO","listados_preliminares.ID_FUENTE","codigos.ID_MUNICIPIOS","codigos.ID_DEPARTAMENTOS","listados_preliminares.NOMBRE","listados_preliminares.UBICACION")
            ->where("listados_preliminares.ID_LISTADO","=",$request->ID_LISTADO)
            ->first();
            if(!isset($queryData)) return response()->json([
                'state' => false,
                'message' => "El registro no existe"
            ]);
            $queryData = $queryData->toArray();
            $clientData = $request->all();
            $changedFieldsListadoPreliminar = array();
            $changedFieldsCodigo = array();
            print_r($queryData);
            print_r($clientData);
            foreach ($queryData as $key => $value){
                if($key=="ID_USUARIO"||$clientData[$key]==$value) continue;
                print_r("El ".$key." cambia\n");
                if($key=="ID_DEPARTAMENTOS"||$key=="ID_MUNICIPIOS"){
                    $changedFieldsCodigo[$key] = $clientData[$key];
                }else{
                    $changedFieldsListadoPreliminar[$key] = $clientData[$key];
                }
            }
            print_r($changedFieldsListadoPreliminar);
            print_r($changedFieldsCodigo);
            if(empty($changedFieldsListadoPreliminar) && empty($changedFieldsCodigo)) return response()->json([
                'state' => false,
                'message' => "No modifico nigun dato"
            ]);
            $listadoPreliminar = ListadosPreliminares::find($clientData['ID_LISTADO']);
            $codigo = Codigos::find($listadoPreliminar->ID_CODIGO);
            print_r($listadoPreliminar->toArray());
            print_r($codigo->toArray());
            if($ID_USUARIO!=$queryData['ID_USUARIO']) $changedFieldsListadoPreliminar['ID_USUARIO'] = $ID_USUARIO;
            if(!empty($changedFieldsCodigo)) {
                $codigo->update($changedFieldsCodigo);
                foreach ($changedFieldsCodigo as $key => $value){
                    HistorialController::create($ID_USUARIO,'codigos',$key,$queryData[$key],$value);
                }
            }
            if(!empty($changedFieldsListadoPreliminar)) {
                $listadoPreliminar->update($changedFieldsListadoPreliminar);
                foreach ($changedFieldsListadoPreliminar as $key => $value){
                    if($key=="ID_USUARIO") continue;
                    HistorialController::create($ID_USUARIO,'listados_preliminares',$key,$queryData[$key],$value);
                }
            }
            return response()->json([
                "state" => true
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "state" => false,
                "message" => "Error en la base de datos",
                'phpMessage' => $th->getMessage()
            ]);
        }
    }

    public function getData() {
        try {
            $queryData = ListadosPreliminares::join("codigos","codigos.ID_CODIGO","=","listados_preliminares.ID_CODIGO")
            ->join('municipios', function ($join) {
                $join->on(function($query){
                    $query->on('codigos.ID_MUNICIPIOS', '=', 'municipios.ID_MUNICIPIOS')
                    ->on("codigos.ID_DEPARTAMENTOS",'municipios.ID_DEPARTAMENTOS');
            });})
            ->join("departamentos","municipios.ID_DEPARTAMENTOS","=","departamentos.ID_DEPARTAMENTOS")
            ->select("listados_preliminares.ID_LISTADO","listados_preliminares.ID_FUENTE","codigos.ID_MUNICIPIOS","codigos.ID_DEPARTAMENTOS","departamentos.DEPARTAMENTO","municipios.MUNICIPIO","listados_preliminares.NOMBRE","listados_preliminares.UBICACION")
            ->get();
            return response()->json([
                "state" => true,
                "data" => $queryData->toArray()
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "state" => false,
                "message" => "Error en la base de datos",
                'phpMessage' => $th->getMessage()
            ]);
        }
    }
}
