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
            $table->string('SIGNIFICADO', 50);
            $table->integer('PUNTAJE');
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
