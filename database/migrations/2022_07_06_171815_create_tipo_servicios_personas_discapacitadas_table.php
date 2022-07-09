<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTipoServiciosPersonasDiscapacitadasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tipo_servicios_personas_discapacitadas', function (Blueprint $table) {
            $table->integer('ID_TIPO_SERVICIOS_PERSONAS_DISCAPACITADAS', true);
            $table->string('NOMBRE', 50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tipo_servicios_personas_discapacitadas');
    }
}
