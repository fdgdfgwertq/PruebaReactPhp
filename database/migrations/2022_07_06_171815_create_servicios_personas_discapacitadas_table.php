<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiciosPersonasDiscapacitadasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servicios_personas_discapacitadas', function (Blueprint $table) {
            $table->integer('ID_SERVICIOS_PERSONAS_DISCAPACITADAS', true);
            $table->integer('ID_TIPO_SERVICIOS_PERSONAS_DISCAPACITADAS')->index('FK_REFERENCE_25');
            $table->string('DESCRIPCION', 200);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('servicios_personas_discapacitadas');
    }
}
