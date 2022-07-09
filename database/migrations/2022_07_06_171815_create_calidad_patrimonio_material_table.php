<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalidadPatrimonioMaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calidad_patrimonio_material', function (Blueprint $table) {
            $table->integer('ID_CALIDAD_PATRIMONIO_MATERIAL', true);
            $table->integer('ESTADO_CONSERVACION')->default(0);
            $table->integer('CONSTITUCION_BIEN')->default(0);
            $table->integer('REPRESENTATIVIDAD_GENERAL_')->default(0);
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
        Schema::dropIfExists('calidad_patrimonio_material');
    }
}
