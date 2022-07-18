<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalidadesInmaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calidades_inmaterial', function (Blueprint $table) {
            $table->integer('ID_CALIDAD_INMATERIAL', true);
            $table->integer('COLECTIVA');
            $table->integer('TRADICIONAL');
            $table->integer('ANONIMA');
            $table->integer('ESPONTANEA');
            $table->integer('POPULAR');
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
        Schema::dropIfExists('calidades_inmaterial');
    }
}
