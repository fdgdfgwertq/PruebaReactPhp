<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToActividadesServiciosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('actividades_servicios', function (Blueprint $table) {
            $table->foreign(['ID_SERVICIOS'], 'FK_REFERENCE_97')->references(['ID_SERVICIOS'])->on('servicios');
            $table->foreign(['ID_ACTIVIDADES'], 'FK_REFERENCE_98')->references(['ID_ACTIVIDADES'])->on('actividades');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('actividades_servicios', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_97');
            $table->dropForeign('FK_REFERENCE_98');
        });
    }
}
