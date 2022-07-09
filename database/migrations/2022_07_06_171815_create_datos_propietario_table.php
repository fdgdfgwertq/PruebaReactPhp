<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatosPropietarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('datos_propietario', function (Blueprint $table) {
            $table->integer('ID_DATOS_PROPIETARIO', true);
            $table->string('NOMBRE', 50);
            $table->string('CORREO_ELECTRONICO', 200);
            $table->bigInteger('TELEFONO');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('datos_propietario');
    }
}
