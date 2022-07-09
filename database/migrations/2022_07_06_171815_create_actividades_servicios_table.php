<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActividadesServiciosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actividades_servicios', function (Blueprint $table) {
            $table->integer('ID_ACTIVIDADES_SERVICIOS', true);
            $table->integer('ID_SERVICIOS')->index('FK_REFERENCE_97');
            $table->integer('ID_ACTIVIDADES')->index('FK_REFERENCE_98');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('actividades_servicios');
    }
}
