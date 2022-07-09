<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstadoAtractivoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estado_atractivo', function (Blueprint $table) {
            $table->integer('ID_ESTADO_ATRACTIVO', true);
            $table->integer('ID_TIPO_ESTADO_ATRACTIVO')->index('FK_REFERENCE_99');
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
        Schema::dropIfExists('estado_atractivo');
    }
}
