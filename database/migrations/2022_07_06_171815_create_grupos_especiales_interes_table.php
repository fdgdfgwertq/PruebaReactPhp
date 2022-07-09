<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGruposEspecialesInteresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grupos_especiales_interes', function (Blueprint $table) {
            $table->integer('ID_GRUPOS_ESPECIALES_INTERES', true);
            $table->integer('ID_GENERALIDADES')->index('FK_REFERENCE_58');
            $table->integer('ID_CARACTERISTICAS')->index('FK_REFERENCE_59');
            $table->integer('ID_PUNTAJES_VALORACION_ESPECIALES')->index('FK_REFERENCE_61');
            $table->integer('ID_CARACTERISTICAS_RELEVANTES')->index('FK_REFERENCE_62');
            $table->integer('ID_ACTIVIDADES_SERVICIOS')->index('FK_REFERENCE_63');
            $table->integer('ID_PROMOCION_ATRACTIVO')->index('FK_REFERENCE_64');
            $table->integer('ID_SERVICIOS_PERSONAS_DISCAPACITADAS')->index('FK_REFERENCE_65');
            $table->integer('ID_DATOS_PROPIETARIO')->index('FK_REFERENCE_66');
            $table->integer('ID_REDES_SOCIALES')->index('FK_REFERENCE_67');
            $table->integer('ID_IMAGENES')->index('FK_REFERENCE_71');
            $table->integer('ID_USUARIO')->index('FK_REFERENCE_83');
            $table->string('REFERENCIAS_BIBLIOGRAFICAS', 200);
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
        Schema::dropIfExists('grupos_especiales_interes');
    }
}
