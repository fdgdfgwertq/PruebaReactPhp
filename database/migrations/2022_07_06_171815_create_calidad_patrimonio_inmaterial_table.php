<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalidadPatrimonioInmaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calidad_patrimonio_inmaterial', function (Blueprint $table) {
            $table->integer('ID_CALIDAD_PATRIMONIO_INMATERIAL', true);
            $table->integer('COLECTIVA')->default(0);
            $table->integer('TRADICIONAL')->default(0);
            $table->integer('ANONIMA')->default(0);
            $table->integer('ESPONTANEA')->default(0);
            $table->integer('POPULAR')->default(0);
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
        Schema::dropIfExists('calidad_patrimonio_inmaterial');
    }
}
