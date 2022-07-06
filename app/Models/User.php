<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = "usuario";
    public $timestamps = false;
    protected $fillable = [
        'id_tipo_usuario',
        'primer_nombre',
        'segundo_nombre',
        'primer_apellido',
        'segundo_apellido',
        'usuario',
        'correo',
        'clave'
    ];
}
