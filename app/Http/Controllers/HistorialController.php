<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Historial;

class HistorialController extends Controller
{
    public static function create($ID_USUARIO,$TABLA_MODIFICADA,$CAMPO_MODIFICADO,$VALOR_OLD,$VALOR_NEW) {
        $historial = new Historial();
        $historial->ID_USUARIO = $ID_USUARIO;
        $historial->TABLA_MODIFICADA = $TABLA_MODIFICADA;
        $historial->CAMPO_MODIFICADO = $CAMPO_MODIFICADO;
        $historial->VALOR_OLD = $VALOR_OLD;
        $historial->VALOR_NEW = $VALOR_NEW;
        $historial->save();
    }
}
