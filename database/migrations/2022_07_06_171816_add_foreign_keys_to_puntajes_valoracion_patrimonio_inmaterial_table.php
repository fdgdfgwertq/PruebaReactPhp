<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPuntajesValoracionPatrimonioInmaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('puntajes_valoracion_patrimonio_inmaterial', function (Blueprint $table) {
            $table->foreign(['ID_SIGNIFICADO'], 'FK_REFERENCE_40')->references(['ID_SIGNIFICADO'])->on('significado');
            $table->foreign(['ID_CALIDAD_PATRIMONIO_INMATERIAL'], 'FK_REFERENCE_90')->references(['ID_CALIDAD_PATRIMONIO_INMATERIAL'])->on('calidad_patrimonio_inmaterial');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('puntajes_valoracion_patrimonio_inmaterial', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_40');
            $table->dropForeign('FK_REFERENCE_90');
        });
    }
}
