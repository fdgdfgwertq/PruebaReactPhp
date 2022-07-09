<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagenesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imagenes', function (Blueprint $table) {
            $table->integer('ID_IMAGENES', true);
            $table->binary('IMAGEN_1');
            $table->binary('IMAGEN_2');
            $table->string('FUENTE', 50);
            $table->timestamp('FECHA_CREACION')->useCurrent();
            $table->timestamp('FECHA_ACTUALIZACION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('imagenes');
    }
}
