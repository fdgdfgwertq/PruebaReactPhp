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
            $table->foreign(['ID_GENERALIDAD'], 'FK_REFERENCE_14')->references(['ID_GENERALIDAD'])->on('generalidades');
            $table->foreign(['ID_CARACTERISTICA'], 'FK_REFERENCE_26')->references(['ID_CARACTERISTICA'])->on('caracteristicas');
            $table->foreign(['ID_VALORACION_FESTIVIDAD'], 'FK_REFERENCE_35')->references(['ID_VALORACION_FESTIVIDAD'])->on('valoraciones_festividad');
            $table->foreign(['ID_RELEVANTE'], 'FK_REFERENCE_50')->references(['ID_RELEVANTE'])->on('caracteristicas_relevantes');
            $table->foreign(['ID_ACTIVIDAD'], 'FK_REFERENCE_58')->references(['ID_ACTIVIDAD'])->on('actividades');
            $table->foreign(['ID_SERVICIO'], 'FK_REFERENCE_59')->references(['ID_SERVICIO'])->on('servicios');
            $table->foreign(['ID_PROMOCION'], 'FK_REFERENCE_67')->references(['ID_PROMOCION'])->on('promocion');
            $table->foreign(['ID_SERVICIO_ESPECIAL'], 'FK_REFERENCE_70')->references(['ID_SERVICIO_ESPECIAL'])->on('servicios_especiales');
            $table->foreign(['ID_RED_SOCIAL'], 'FK_REFERENCE_75')->references(['ID_RED_SOCIAL'])->on('redes');
            $table->foreign(['ID_LISTADO'], 'FK_REFERENCE_86')->references(['ID_LISTADO'])->on('listados_preliminares');
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
            $table->dropForeign('FK_REFERENCE_14');
            $table->dropForeign('FK_REFERENCE_26');
            $table->dropForeign('FK_REFERENCE_35');
            $table->dropForeign('FK_REFERENCE_50');
            $table->dropForeign('FK_REFERENCE_58');
            $table->dropForeign('FK_REFERENCE_59');
            $table->dropForeign('FK_REFERENCE_67');
            $table->dropForeign('FK_REFERENCE_70');
            $table->dropForeign('FK_REFERENCE_75');
            $table->dropForeign('FK_REFERENCE_86');
        });
    }
}
