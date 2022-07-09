<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePuntajesValoracionPatrimonioInmaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('puntajes_valoracion_patrimonio_inmaterial', function (Blueprint $table) {
            $table->integer('ID_PUNTAJES_VALORACION_PATRIMONIO_INMATERIAL', true);
            $table->integer('ID_SIGNIFICADO')->index('FK_REFERENCE_40');
            $table->integer('ID_CALIDAD_PATRIMONIO_INMATERIAL')->index('FK_REFERENCE_90');
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
        Schema::dropIfExists('puntajes_valoracion_patrimonio_inmaterial');
    }
}
