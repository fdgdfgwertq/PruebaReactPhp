<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitiosNaturalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sitios_naturales', function (Blueprint $table) {
            $table->integer('ID_SITIOS_NATURALES', true);
            $table->integer('ID_GENERALIDADES')->index('FK_REFERENCE_68');
            $table->integer('ID_CARACTERISTICAS')->index('FK_REFERENCE_69');
            $table->integer('ID_PUNTAJES_VALORACION_SITIOS')->index('FK_REFERENCE_70');
            $table->integer('ID_IMAGENES')->index('FK_REFERENCE_73');
            $table->integer('ID_CARACTERISTICAS_RELEVANTES')->index('FK_REFERENCE_76');
            $table->integer('ID_ACTIVIDADES_SERVICIOS')->index('FK_REFERENCE_77');
            $table->integer('ID_PROMOCION_ATRACTIVO')->index('FK_REFERENCE_79');
            $table->integer('ID_SERVICIOS_PERSONAS_DISCAPACITADAS')->index('FK_REFERENCE_80');
            $table->integer('ID_DATOS_PROPIETARIO')->index('FK_REFERENCE_81');
            $table->integer('ID_REDES_SOCIALES')->index('FK_REFERENCE_82');
            $table->integer('ID_USUARIO')->index('FK_REFERENCE_84');
            $table->string('REFERENCIA_BIBLIOGRAFICA', 200);
            $table->string('OBSERVACIONES', 200);
            $table->timestamp('FECHA_CREACION')->useCurrent();
            $table->timestamp('FECHA_ACTUALIZACION')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sitios_naturales');
    }
}
