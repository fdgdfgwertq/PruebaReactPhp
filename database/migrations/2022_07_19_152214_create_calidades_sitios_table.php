<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalidadesSitiosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calidades_sitios', function (Blueprint $table) {
            $table->integer('ID_CALIDAD_SITIO', true);
            $table->integer('S_C_AIRE');
            $table->integer('S_C_AGUA');
            $table->integer('S_C_VISUAL');
            $table->integer('CONSERVACION');
            $table->integer('S_C_SONORA');
            $table->integer('DIVERSIDAD');
            $table->integer('SINGULARIDAD');
            $table->float('SUBTOTAL', 10, 0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('calidades_sitios');
    }
}
