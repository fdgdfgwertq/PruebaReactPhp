<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToGruposEspecialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('grupos_especiales', function (Blueprint $table) {
            $table->foreign(['ID_GENERALIDAD'], 'FK_REFERENCE_15')->references(['ID_GENERALIDAD'])->on('generalidades');
            $table->foreign(['ID_CARACTERISTICA'], 'FK_REFERENCE_27')->references(['ID_CARACTERISTICA'])->on('caracteristicas');
            $table->foreign(['ID_VALORACION_GRUPO'], 'FK_REFERENCE_39')->references(['ID_VALORACION_GRUPOS'])->on('valoraciones_grupos');
            $table->foreign(['ID_RELEVANTE'], 'FK_REFERENCE_51')->references(['ID_RELEVANTE'])->on('caracteristicas_relevantes');
            $table->foreign(['ID_ACTIVIDAD'], 'FK_REFERENCE_60')->references(['ID_ACTIVIDAD'])->on('actividades');
            $table->foreign(['ID_SERVICIO'], 'FK_REFERENCE_61')->references(['ID_SERVICIO'])->on('servicios');
            $table->foreign(['ID_PROMOCION'], 'FK_REFERENCE_68')->references(['ID_PROMOCION'])->on('promocion');
            $table->foreign(['ID_SERVICIO_ESPECIAL'], 'FK_REFERENCE_71')->references(['ID_SERVICIO_ESPECIAL'])->on('servicios_especiales');
            $table->foreign(['ID_RED_SOCIAL'], 'FK_REFERENCE_76')->references(['ID_RED_SOCIAL'])->on('redes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('grupos_especiales', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_15');
            $table->dropForeign('FK_REFERENCE_27');
            $table->dropForeign('FK_REFERENCE_39');
            $table->dropForeign('FK_REFERENCE_51');
            $table->dropForeign('FK_REFERENCE_60');
            $table->dropForeign('FK_REFERENCE_61');
            $table->dropForeign('FK_REFERENCE_68');
            $table->dropForeign('FK_REFERENCE_71');
            $table->dropForeign('FK_REFERENCE_76');
        });
    }
}
