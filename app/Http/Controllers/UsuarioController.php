<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Validator;
use App\Rules\ConfirmPassword;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Usuario::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {  
        $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        $rules = [
            'id_tipo_usuario'=>'required',
            'primer_nombre'=>'required|alpha|max:50',
            'segundo_nombre'=>'alpha|max:50',
            'primer_apellido'=>'required|alpha|max:50',
            'segundo_apellido'=>'required|alpha|max:50',
            'usuario'=>'required|unique:Usuario,usuario|max:50',
            'correo'=>'required|email|unique:Usuario,correo|max:100',
            'password'=>'required|max:16',
            'confirmPassword'=>['required',new ConfirmPassword('algo')]
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'estado' => false,
                'errores' => $validator->errors()
            ]);
        }
        return response("algo");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
