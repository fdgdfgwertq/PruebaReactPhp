<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePromocionAtractivoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promocion_atractivo', function (Blueprint $table) {
            $table->integer('ID_PROMOCION_ATRACTIVO', true);
            $table->integer('ID_TIPO_PROMOCION_ATRACTIVO')->index('FK_REFERENCE_23');
            $table->string('DESCRIPCION', 200);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('promocion_atractivo');
    }
}
