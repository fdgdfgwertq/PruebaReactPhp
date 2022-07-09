<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePuntajesValoracionSitiosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('puntajes_valoracion_sitios', function (Blueprint $table) {
            $table->integer('ID_PUNTAJES_VALORACION_SITIOS', true);
            $table->integer('ID_SIGNIFICADO')->index('FK_REFERENCE_72');
            $table->integer('ID_CALIDAD_SITIOS_NATURALES')->index('FK_REFERENCE_89');
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
        Schema::dropIfExists('puntajes_valoracion_sitios');
    }
}
