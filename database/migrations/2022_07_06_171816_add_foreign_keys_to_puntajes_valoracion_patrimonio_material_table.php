<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPuntajesValoracionPatrimonioMaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('puntajes_valoracion_patrimonio_material', function (Blueprint $table) {
            $table->foreign(['ID_SIGNIFICADO'], 'FK_REFERENCE_102')->references(['ID_SIGNIFICADO'])->on('significado');
            $table->foreign(['ID_CALIDAD_PATRIMONIO_MATERIAL'], 'FK_REFERENCE_88')->references(['ID_CALIDAD_PATRIMONIO_MATERIAL'])->on('calidad_patrimonio_material');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('puntajes_valoracion_patrimonio_material', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_102');
            $table->dropForeign('FK_REFERENCE_88');
        });
    }
}
