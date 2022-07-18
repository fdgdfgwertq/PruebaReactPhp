<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiciosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servicios', function (Blueprint $table) {
            $table->integer('ID_SERVICIO', true);
            $table->string('TIENDAS', 300)->nullable();
            $table->string('GUIAS', 300)->nullable();
            $table->string('BANOS', 300)->nullable();
            $table->string('RESTAURANTES', 300)->nullable();
            $table->string('PARQUEADERO', 300)->nullable();
            $table->string('ALOJAMIENTO', 300)->nullable();
            $table->string('OTROS', 300)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('servicios');
    }
}
