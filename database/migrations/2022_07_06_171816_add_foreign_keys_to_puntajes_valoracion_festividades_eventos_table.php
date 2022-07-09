<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPuntajesValoracionFestividadesEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('puntajes_valoracion_festividades_eventos', function (Blueprint $table) {
            $table->foreign(['ID_SIGNIFICADO'], 'FK_REFERENCE_101')->references(['ID_SIGNIFICADO'])->on('significado');
            $table->foreign(['ID_CALIDAD_FESTIVIDADES_EVENTOS'], 'FK_REFERENCE_91')->references(['ID_CALIDAD_FESTIVIDADES_EVENTOS'])->on('calidad_festividades_eventos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('puntajes_valoracion_festividades_eventos', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_101');
            $table->dropForeign('FK_REFERENCE_91');
        });
    }
}
