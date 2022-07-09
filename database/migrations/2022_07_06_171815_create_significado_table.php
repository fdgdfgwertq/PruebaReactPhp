<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSignificadoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('significado', function (Blueprint $table) {
            $table->integer('ID_SIGNIFICADO', true);
            $table->integer('ID_TIPO_SIGNIFICADO')->index('FK_REFERENCE_29');
            $table->float('PUNTAJE', 10, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('significado');
    }
}
