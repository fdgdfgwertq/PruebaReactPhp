<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToFestividadesEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('festividades_eventos', function (Blueprint $table) {
            $table->foreign(['ID_GENERALIDADES'], 'FK_REFERENCE_45')->references(['ID_GENERALIDADES'])->on('generalidades');
            $table->foreign(['ID_CARACTERISTICAS'], 'FK_REFERENCE_46')->references(['ID_CARACTERISTICAS'])->on('caracteristicas');
            $table->foreign(['ID_IMAGENES'], 'FK_REFERENCE_47')->references(['ID_IMAGENES'])->on('imagenes');
            $table->foreign(['ID_CARACTERISTICAS_RELEVANTES'], 'FK_REFERENCE_52')->references(['ID_CARACTERISTICAS_RELEVANTES'])->on('caracteristicas_relevantes');
            $table->foreign(['ID_ACTIVIDADES_SERVICIOS'], 'FK_REFERENCE_53')->references(['ID_ACTIVIDADES_SERVICIOS'])->on('actividades_servicios');
            $table->foreign(['ID_PROMOCION_ATRACTIVO'], 'FK_REFERENCE_54')->references(['ID_PROMOCION_ATRACTIVO'])->on('promocion_atractivo');
            $table->foreign(['ID_SERVICIOS_PERSONAS_DISCAPACITADAS'], 'FK_REFERENCE_55')->references(['ID_SERVICIOS_PERSONAS_DISCAPACITADAS'])->on('servicios_personas_discapacitadas');
            $table->foreign(['ID_DATOS_PROPIETARIO'], 'FK_REFERENCE_56')->references(['ID_DATOS_PROPIETARIO'])->on('datos_propietario');
            $table->foreign(['ID_REDES_SOCIALES'], 'FK_REFERENCE_57')->references(['ID_REDES_SOCIALES'])->on('redes_sociales');
            $table->foreign(['ID_USUARIO'], 'FK_REFERENCE_86')->references(['ID_USUARIO'])->on('usuario');
            $table->foreign(['ID_PUNTAJES_VALORACION_FESTIVIDADES_EVENTOS'], 'FK_REFERENCE_92')->references(['ID_PUNTAJES_VALORACION_FESTIVIDADES_EVENTOS'])->on('puntajes_valoracion_festividades_eventos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('festividades_eventos', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_45');
            $table->dropForeign('FK_REFERENCE_46');
            $table->dropForeign('FK_REFERENCE_47');
            $table->dropForeign('FK_REFERENCE_52');
            $table->dropForeign('FK_REFERENCE_53');
            $table->dropForeign('FK_REFERENCE_54');
            $table->dropForeign('FK_REFERENCE_55');
            $table->dropForeign('FK_REFERENCE_56');
            $table->dropForeign('FK_REFERENCE_57');
            $table->dropForeign('FK_REFERENCE_86');
            $table->dropForeign('FK_REFERENCE_92');
        });
    }
}
