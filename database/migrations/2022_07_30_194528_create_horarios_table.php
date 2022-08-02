<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHorariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('horarios', function (Blueprint $table) {
            $table->integer('ID_HORARIO', true);
            $table->integer('ID_INGRESO')->nullable()->index('FK_REFERENCE_45');
            $table->boolean('RESTRINGIDO')->nullable();
            $table->boolean('PERMANENTE')->nullable();
            $table->boolean('VISITA_EXTERIOR')->nullable();
            $table->boolean('VISITA_INTERIOR')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('horarios');
    }
}
