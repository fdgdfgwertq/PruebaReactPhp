<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PatrimoniosMateriales;
use App\Models\PatrimoniosInmateriales;
use App\Models\FestividadesEventos;
use App\Models\GruposEspeciales;
use App\Models\SitiosNaturales;
use App\Http\Controllers\HistorialController;

class PatrimoniosClasificacionController extends Controller
{
    public static function insertForms ($ID_LISTADO,$ID_TIPO_BIEN,$ID_USUARIO)
    {
        switch ($ID_TIPO_BIEN) {
            case 1:
                $material = new PatrimoniosMateriales();
                $material -> ID_LISTADO = $ID_LISTADO;
                $material -> save();
                HistorialController::createInsert($ID_USUARIO,'patrimonios_materiales',$material->ID_MATERIAL,1);
                break;
            case 2:
                $inmaterial = new PatrimoniosInmateriales();
                $inmaterial -> ID_LISTADO = $ID_LISTADO;
                $inmaterial -> save();
                HistorialController::createInsert($ID_USUARIO,'patrimonios_inmateriales',$inmaterial->ID_INMATERIAL,1);
                break;
            case 3:
                $eventos = new FestividadesEventos();
                $eventos -> ID_LISTADO = $ID_LISTADO;
                $eventos -> save();
                HistorialController::createInsert($ID_USUARIO,'festividades_eventos',$eventos->ID_EVENTO,1);
                break;
            case 4:
                $grupos = new GruposEspeciales();
                $grupos -> ID_LISTADO = $ID_LISTADO;
                $grupos -> save();
                HistorialController::createInsert($ID_USUARIO,'grupos_especiales',$grupos->ID_GRUPO,1);
                break;
            case 5:
                $sitios = new SitiosNaturales();
                $sitios -> ID_LISTADO = $ID_LISTADO;
                $sitios -> save();
                HistorialController::createInsert($ID_USUARIO,'sitios_naturales',$sitios->ID_SITIO,1);
                break;
        }
    }

    public static function deleteForms($FORMULARIO,$ID_REGISTRO,$ID_USUARIO)
    {
        if (!empty($FORMULARIO)){
            switch ($FORMULARIO) {
                case 1:
                    $registro = PatrimoniosMateriales::select("patrimonios_materiales.ID_MATERIAL")
                    ->where("patrimonios_materiales.ID_LISTADO","=",$ID_REGISTRO)
                    ->first();;
                    $registro -> delete();
                    break;
                case 2:
                    $registro = PatrimoniosInmateriales::select("patrimonios_inmateriales.ID_INMATERIAL")
                    ->where("patrimonios_inmateriales.ID_LISTADO","=",$ID_REGISTRO)
                    ->first();;
                    $registro -> delete();
                    break;
                case 3:
                    $registro = FestividadesEventos::select("festividades_eventos.ID_EVENTO")
                    ->where("festividades_eventos.ID_LISTADO","=",$ID_REGISTRO)
                    ->first();;
                    $registro -> delete();
                    break;
                case 4:
                    $registro = GruposEspeciales::select("grupos_especiales.ID_GRUPO")
                    ->where("grupos_especiales.ID_LISTADO","=",$ID_REGISTRO)
                    ->first();;
                    $registro -> delete();
                    break;
                case 5:
                    $registro = SitiosNaturales::select("sitios_naturales.ID_SITIO")
                    ->where("sitios_naturales.ID_LISTADO","=",$ID_REGISTRO)
                    ->first();;
                    $registro -> delete();
                    break;
            }
        }
    }
}
