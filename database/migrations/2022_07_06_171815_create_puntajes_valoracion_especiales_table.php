<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePuntajesValoracionEspecialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('puntajes_valoracion_especiales', function (Blueprint $table) {
            $table->integer('ID_PUNTAJES_VALORACION_ESPECIALES', true);
            $table->integer('ID_SIGNIFICADO')->index('FK_REFERENCE_60');
            $table->integer('RESPETO_COSTUMBRES')->default(0);
            $table->float('TOTAL', 10, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('puntajes_valoracion_especiales');
    }
}
