<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Historial extends Model
{
    use HasFactory,HasApiTokens;
    protected $table = "historial";
    protected $primaryKey = 'ID_HISTORIAL';
    public $timestamps = false;
    protected $fillable = [
        'ID_USUARIO',
        'TABLA_MODIFICADA',
        'CAMPO_MODIFICADO',
        'VALOR_OLD',
        'VALOR_NEW'
    ];
}
