<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHorarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('horario', function (Blueprint $table) {
            $table->integer('ID_HORARIO', true);
            $table->string('INGRESO', 50);
            $table->boolean('RESTRINGIDO');
            $table->boolean('PERMANENTE');
            $table->boolean('VISITA_EXTERIOR');
            $table->boolean('VISITA_INTERIOR');
            $table->string('DIAS_HORAS_VISITA', 50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('horario');
    }
}
