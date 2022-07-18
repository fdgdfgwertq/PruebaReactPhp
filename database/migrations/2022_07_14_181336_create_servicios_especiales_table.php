<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiciosEspecialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servicios_especiales', function (Blueprint $table) {
            $table->integer('ID_SERVICIO_ESPECIAL', true);
            $table->string('ASCENSORES', 300)->nullable();
            $table->string('RAMPAS', 300)->nullable();
            $table->string('DISCAP_AUDITIVA', 300)->nullable();
            $table->string('BANOS', 300)->nullable();
            $table->string('MOVILIDAD', 300)->nullable();
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
        Schema::dropIfExists('servicios_especiales');
    }
}
