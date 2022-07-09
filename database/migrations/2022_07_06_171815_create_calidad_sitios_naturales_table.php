<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalidadSitiosNaturalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calidad_sitios_naturales', function (Blueprint $table) {
            $table->integer('ID_CALIDAD_SITIOS_NATURALES', true);
            $table->integer('SIN_CONTAMINACION_AIRE')->default(0);
            $table->integer('SIN_CONTAMINACION_AGUA')->default(0);
            $table->integer('SIN_CONTAMINACION_VISUAL')->default(0);
            $table->integer('ESTADO_CONSERVACION')->default(0);
            $table->integer('SIN_CONTAMINACION_SONORA')->default(0);
            $table->integer('DIVERSIDAD')->default(0);
            $table->integer('SINGULARIDAD')->default(0);
            $table->float('SUBTOTAL', 10, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('calidad_sitios_naturales');
    }
}
