<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePuntajesValoracionPatrimonioMaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('puntajes_valoracion_patrimonio_material', function (Blueprint $table) {
            $table->integer('ID_PUNTAJES_VALORACION_PATRIMONIO_MATERIAL', true);
            $table->integer('ID_SIGNIFICADO')->index('FK_REFERENCE_102');
            $table->integer('ID_CALIDAD_PATRIMONIO_MATERIAL')->index('FK_REFERENCE_88');
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
        Schema::dropIfExists('puntajes_valoracion_patrimonio_material');
    }
}
