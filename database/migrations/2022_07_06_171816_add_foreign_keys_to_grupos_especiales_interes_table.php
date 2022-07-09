<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToGruposEspecialesInteresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('grupos_especiales_interes', function (Blueprint $table) {
            $table->foreign(['ID_GENERALIDADES'], 'FK_REFERENCE_58')->references(['ID_GENERALIDADES'])->on('generalidades');
            $table->foreign(['ID_CARACTERISTICAS'], 'FK_REFERENCE_59')->references(['ID_CARACTERISTICAS'])->on('caracteristicas');
            $table->foreign(['ID_PUNTAJES_VALORACION_ESPECIALES'], 'FK_REFERENCE_61')->references(['ID_PUNTAJES_VALORACION_ESPECIALES'])->on('puntajes_valoracion_especiales');
            $table->foreign(['ID_CARACTERISTICAS_RELEVANTES'], 'FK_REFERENCE_62')->references(['ID_CARACTERISTICAS_RELEVANTES'])->on('caracteristicas_relevantes');
            $table->foreign(['ID_ACTIVIDADES_SERVICIOS'], 'FK_REFERENCE_63')->references(['ID_ACTIVIDADES_SERVICIOS'])->on('actividades_servicios');
            $table->foreign(['ID_PROMOCION_ATRACTIVO'], 'FK_REFERENCE_64')->references(['ID_PROMOCION_ATRACTIVO'])->on('promocion_atractivo');
            $table->foreign(['ID_SERVICIOS_PERSONAS_DISCAPACITADAS'], 'FK_REFERENCE_65')->references(['ID_SERVICIOS_PERSONAS_DISCAPACITADAS'])->on('servicios_personas_discapacitadas');
            $table->foreign(['ID_DATOS_PROPIETARIO'], 'FK_REFERENCE_66')->references(['ID_DATOS_PROPIETARIO'])->on('datos_propietario');
            $table->foreign(['ID_REDES_SOCIALES'], 'FK_REFERENCE_67')->references(['ID_REDES_SOCIALES'])->on('redes_sociales');
            $table->foreign(['ID_IMAGENES'], 'FK_REFERENCE_71')->references(['ID_IMAGENES'])->on('imagenes');
            $table->foreign(['ID_USUARIO'], 'FK_REFERENCE_83')->references(['ID_USUARIO'])->on('usuario');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('grupos_especiales_interes', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_58');
            $table->dropForeign('FK_REFERENCE_59');
            $table->dropForeign('FK_REFERENCE_61');
            $table->dropForeign('FK_REFERENCE_62');
            $table->dropForeign('FK_REFERENCE_63');
            $table->dropForeign('FK_REFERENCE_64');
            $table->dropForeign('FK_REFERENCE_65');
            $table->dropForeign('FK_REFERENCE_66');
            $table->dropForeign('FK_REFERENCE_67');
            $table->dropForeign('FK_REFERENCE_71');
            $table->dropForeign('FK_REFERENCE_83');
        });
    }
}
