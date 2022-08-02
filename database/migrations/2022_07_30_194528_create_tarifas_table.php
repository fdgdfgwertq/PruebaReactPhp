<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTarifasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tarifas', function (Blueprint $table) {
            $table->integer('ID_TARIFA', true);
            $table->float('NINOS', 10, 0)->nullable()->default(0);
            $table->float('ADULTOS', 10, 0)->nullable()->default(0);
            $table->float('ADULTO_MAYOR', 10, 0)->nullable()->default(0);
            $table->float('EXTRANJEROS', 10, 0)->nullable()->default(0);
            $table->float('ESTUDIANTES', 10, 0)->nullable()->default(0);
            $table->float('CITA_PREVIA', 10, 0)->nullable()->default(0);
            $table->float('GENERAL', 10, 0)->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tarifas');
    }
}
