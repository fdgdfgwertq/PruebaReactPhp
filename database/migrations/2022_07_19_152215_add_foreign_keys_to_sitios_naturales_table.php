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
            $table->foreign(['ID_GENERALIDAD'], 'FK_REFERENCE_16')->references(['ID_GENERALIDAD'])->on('generalidades');
            $table->foreign(['ID_CARACTERISTICA'], 'FK_REFERENCE_28')->references(['ID_CARACTERISTICA'])->on('caracteristicas');
            $table->foreign(['ID_VALORACION_SITIO'], 'FK_REFERENCE_40')->references(['ID_VALORACION_SITIO'])->on('valoraciones_sitios');
            $table->foreign(['ID_RELEVANTE'], 'FK_REFERENCE_52')->references(['ID_RELEVANTE'])->on('caracteristicas_relevantes');
            $table->foreign(['ID_ACTIVIDAD'], 'FK_REFERENCE_62')->references(['ID_ACTIVIDAD'])->on('actividades');
            $table->foreign(['ID_SERVICIO'], 'FK_REFERENCE_63')->references(['ID_SERVICIO'])->on('servicios');
            $table->foreign(['ID_PROMOCION'], 'FK_REFERENCE_69')->references(['ID_PROMOCION'])->on('promocion');
            $table->foreign(['ID_SERVICIO_ESPECIAL'], 'FK_REFERENCE_72')->references(['ID_SERVICIO_ESPECIAL'])->on('servicios_especiales');
            $table->foreign(['ID_RED_SOCIAL'], 'FK_REFERENCE_77')->references(['ID_RED_SOCIAL'])->on('redes');
            $table->foreign(['ID_LISTADO'], 'FK_REFERENCE_88')->references(['ID_LISTADO'])->on('listados_preliminares');
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
            $table->dropForeign('FK_REFERENCE_16');
            $table->dropForeign('FK_REFERENCE_28');
            $table->dropForeign('FK_REFERENCE_40');
            $table->dropForeign('FK_REFERENCE_52');
            $table->dropForeign('FK_REFERENCE_62');
            $table->dropForeign('FK_REFERENCE_63');
            $table->dropForeign('FK_REFERENCE_69');
            $table->dropForeign('FK_REFERENCE_72');
            $table->dropForeign('FK_REFERENCE_77');
            $table->dropForeign('FK_REFERENCE_88');
        });
    }
}
