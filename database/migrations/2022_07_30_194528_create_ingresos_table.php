<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngresosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingresos', function (Blueprint $table) {
            $table->integer('ID_INGRESO', true);
            $table->boolean('LUNES')->nullable();
            $table->boolean('MARTES')->nullable();
            $table->boolean('MIERCOLES')->nullable();
            $table->boolean('JUEVES')->nullable();
            $table->boolean('VIERNES')->nullable();
            $table->boolean('SABADO')->nullable();
            $table->boolean('DOMINGO')->nullable();
            $table->time('HORA_ENTRADA')->nullable();
            $table->time('HORA_SALIDA')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ingresos');
    }
}
