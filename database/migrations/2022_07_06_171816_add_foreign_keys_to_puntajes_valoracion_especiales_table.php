<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPuntajesValoracionEspecialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('puntajes_valoracion_especiales', function (Blueprint $table) {
            $table->foreign(['ID_SIGNIFICADO'], 'FK_REFERENCE_60')->references(['ID_SIGNIFICADO'])->on('significado');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('puntajes_valoracion_especiales', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_60');
        });
    }
}
