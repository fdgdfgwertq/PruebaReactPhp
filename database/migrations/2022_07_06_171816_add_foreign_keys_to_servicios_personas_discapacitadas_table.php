<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToServiciosPersonasDiscapacitadasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('servicios_personas_discapacitadas', function (Blueprint $table) {
            $table->foreign(['ID_TIPO_SERVICIOS_PERSONAS_DISCAPACITADAS'], 'FK_REFERENCE_25')->references(['ID_TIPO_SERVICIOS_PERSONAS_DISCAPACITADAS'])->on('tipo_servicios_personas_discapacitadas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('servicios_personas_discapacitadas', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_25');
        });
    }
}
