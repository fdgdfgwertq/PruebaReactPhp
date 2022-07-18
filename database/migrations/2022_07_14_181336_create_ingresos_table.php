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
            $table->boolean('LUNES');
            $table->boolean('MARTES');
            $table->boolean('MIERCOLES');
            $table->boolean('JUEVES');
            $table->boolean('VIERNES');
            $table->boolean('SABADO');
            $table->boolean('DOMINGO');
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
