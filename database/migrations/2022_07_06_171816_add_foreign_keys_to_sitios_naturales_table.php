<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToSitiosNaturalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sitios_naturales', function (Blueprint $table) {
            $table->foreign(['ID_GENERALIDADES'], 'FK_REFERENCE_68')->references(['ID_GENERALIDADES'])->on('generalidades');
            $table->foreign(['ID_CARACTERISTICAS'], 'FK_REFERENCE_69')->references(['ID_CARACTERISTICAS'])->on('caracteristicas');
            $table->foreign(['ID_PUNTAJES_VALORACION_SITIOS'], 'FK_REFERENCE_70')->references(['ID_PUNTAJES_VALORACION_SITIOS'])->on('puntajes_valoracion_sitios');
            $table->foreign(['ID_IMAGENES'], 'FK_REFERENCE_73')->references(['ID_IMAGENES'])->on('imagenes');
            $table->foreign(['ID_CARACTERISTICAS_RELEVANTES'], 'FK_REFERENCE_76')->references(['ID_CARACTERISTICAS_RELEVANTES'])->on('caracteristicas_relevantes');
            $table->foreign(['ID_ACTIVIDADES_SERVICIOS'], 'FK_REFERENCE_77')->references(['ID_ACTIVIDADES_SERVICIOS'])->on('actividades_servicios');
            $table->foreign(['ID_PROMOCION_ATRACTIVO'], 'FK_REFERENCE_79')->references(['ID_PROMOCION_ATRACTIVO'])->on('promocion_atractivo');
            $table->foreign(['ID_SERVICIOS_PERSONAS_DISCAPACITADAS'], 'FK_REFERENCE_80')->references(['ID_SERVICIOS_PERSONAS_DISCAPACITADAS'])->on('servicios_personas_discapacitadas');
            $table->foreign(['ID_DATOS_PROPIETARIO'], 'FK_REFERENCE_81')->references(['ID_DATOS_PROPIETARIO'])->on('datos_propietario');
            $table->foreign(['ID_REDES_SOCIALES'], 'FK_REFERENCE_82')->references(['ID_REDES_SOCIALES'])->on('redes_sociales');
            $table->foreign(['ID_USUARIO'], 'FK_REFERENCE_84')->references(['ID_USUARIO'])->on('usuario');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sitios_naturales', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_68');
            $table->dropForeign('FK_REFERENCE_69');
            $table->dropForeign('FK_REFERENCE_70');
            $table->dropForeign('FK_REFERENCE_73');
            $table->dropForeign('FK_REFERENCE_76');
            $table->dropForeign('FK_REFERENCE_77');
            $table->dropForeign('FK_REFERENCE_79');
            $table->dropForeign('FK_REFERENCE_80');
            $table->dropForeign('FK_REFERENCE_81');
            $table->dropForeign('FK_REFERENCE_82');
            $table->dropForeign('FK_REFERENCE_84');
        });
    }
}
