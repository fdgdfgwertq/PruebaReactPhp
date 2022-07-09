<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPatrimonioMaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('patrimonio_material', function (Blueprint $table) {
            $table->foreign(['ID_PUNTAJES_VALORACION_PATRIMONIO_MATERIAL'], 'FK_REFERENCE_103')->references(['ID_PUNTAJES_VALORACION_PATRIMONIO_MATERIAL'])->on('puntajes_valoracion_patrimonio_material');
            $table->foreign(['ID_CARACTERISTICAS_RELEVANTES'], 'FK_REFERENCE_17')->references(['ID_CARACTERISTICAS_RELEVANTES'])->on('caracteristicas_relevantes');
            $table->foreign(['ID_ACTIVIDADES_SERVICIOS'], 'FK_REFERENCE_22')->references(['ID_ACTIVIDADES_SERVICIOS'])->on('actividades_servicios');
            $table->foreign(['ID_PROMOCION_ATRACTIVO'], 'FK_REFERENCE_24')->references(['ID_PROMOCION_ATRACTIVO'])->on('promocion_atractivo');
            $table->foreign(['ID_SERVICIOS_PERSONAS_DISCAPACITADAS'], 'FK_REFERENCE_26')->references(['ID_SERVICIOS_PERSONAS_DISCAPACITADAS'])->on('servicios_personas_discapacitadas');
            $table->foreign(['ID_USUARIO'], 'FK_REFERENCE_3')->references(['ID_USUARIO'])->on('usuario');
            $table->foreign(['ID_DATOS_PROPIETARIO'], 'FK_REFERENCE_33')->references(['ID_DATOS_PROPIETARIO'])->on('datos_propietario');
            $table->foreign(['ID_REDES_SOCIALES'], 'FK_REFERENCE_34')->references(['ID_REDES_SOCIALES'])->on('redes_sociales');
            $table->foreign(['ID_GENERALIDADES'], 'FK_REFERENCE_7')->references(['ID_GENERALIDADES'])->on('generalidades');
            $table->foreign(['ID_CARACTERISTICAS'], 'FK_REFERENCE_8')->references(['ID_CARACTERISTICAS'])->on('caracteristicas');
            $table->foreign(['ID_IMAGENES'], 'FK_REFERENCE_9')->references(['ID_IMAGENES'])->on('imagenes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('patrimonio_material', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_103');
            $table->dropForeign('FK_REFERENCE_17');
            $table->dropForeign('FK_REFERENCE_22');
            $table->dropForeign('FK_REFERENCE_24');
            $table->dropForeign('FK_REFERENCE_26');
            $table->dropForeign('FK_REFERENCE_3');
            $table->dropForeign('FK_REFERENCE_33');
            $table->dropForeign('FK_REFERENCE_34');
            $table->dropForeign('FK_REFERENCE_7');
            $table->dropForeign('FK_REFERENCE_8');
            $table->dropForeign('FK_REFERENCE_9');
        });
    }
}
