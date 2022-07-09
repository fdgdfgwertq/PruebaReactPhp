<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTipoPromocionAtractivoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tipo_promocion_atractivo', function (Blueprint $table) {
            $table->integer('ID_TIPO_PROMOCION_ATRACTIVO', true);
            $table->string('NOMBRE', 50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tipo_promocion_atractivo');
    }
}
