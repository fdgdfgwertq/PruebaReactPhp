<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPatrimoniosInmaterialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('patrimonios_inmateriales', function (Blueprint $table) {
            $table->foreign(['ID_GENERALIDAD'], 'FK_REFERENCE_13')->references(['ID_GENERALIDAD'])->on('generalidades');
            $table->foreign(['ID_CARACTERISTICA'], 'FK_REFERENCE_25')->references(['ID_CARACTERISTICA'])->on('caracteristicas');
            $table->foreign(['ID_VALORACION_INMATERIAL'], 'FK_REFERENCE_32')->references(['ID_VALORACION_INMATERIAL'])->on('valoraciones_inmaterial');
            $table->foreign(['ID_ACTIVIDAD'], 'FK_REFERENCE_57')->references(['ID_ACTIVIDAD'])->on('actividades');
            $table->foreign(['ID_PROMOCION'], 'FK_REFERENCE_66')->references(['ID_PROMOCION'])->on('promocion');
            $table->foreign(['ID_RED_SOCIAL'], 'FK_REFERENCE_74')->references(['ID_RED_SOCIAL'])->on('redes');
            $table->foreign(['ID_LISTADO'], 'FK_REFERENCE_85')->references(['ID_LISTADO'])->on('listados_preliminares');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('patrimonios_inmateriales', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_13');
            $table->dropForeign('FK_REFERENCE_25');
            $table->dropForeign('FK_REFERENCE_32');
            $table->dropForeign('FK_REFERENCE_57');
            $table->dropForeign('FK_REFERENCE_66');
            $table->dropForeign('FK_REFERENCE_74');
            $table->dropForeign('FK_REFERENCE_85');
        });
    }
}
