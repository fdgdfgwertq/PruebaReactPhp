<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalidadesMaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calidades_material', function (Blueprint $table) {
            $table->integer('ID_CALIDAD_MATERIAL', true);
            $table->integer('ESTADO_CONSERVACION');
            $table->integer('CONSTITUCION');
            $table->integer('REPRESENTATIVIDAD');
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
        Schema::dropIfExists('calidades_material');
    }
}
