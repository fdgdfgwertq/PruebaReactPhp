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
            $table->integer('ESTADO_CONSERVACION')->nullable();
            $table->integer('CONSTITUCION')->nullable();
            $table->integer('REPRESENTATIVIDAD')->nullable();
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
        Schema::dropIfExists('calidades_material');
    }
}
