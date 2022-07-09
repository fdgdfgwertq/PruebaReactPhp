<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePuntajesValoracionFestividadesEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('puntajes_valoracion_festividades_eventos', function (Blueprint $table) {
            $table->integer('ID_PUNTAJES_VALORACION_FESTIVIDADES_EVENTOS', true);
            $table->integer('ID_CALIDAD_FESTIVIDADES_EVENTOS')->index('FK_REFERENCE_91');
            $table->integer('ID_SIGNIFICADO')->index('FK_REFERENCE_101');
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
        Schema::dropIfExists('puntajes_valoracion_festividades_eventos');
    }
}
