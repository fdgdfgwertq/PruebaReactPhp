<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToEstadoAtractivoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('estado_atractivo', function (Blueprint $table) {
            $table->foreign(['ID_TIPO_ESTADO_ATRACTIVO'], 'FK_REFERENCE_99')->references(['ID_TIPO_ESTADO_ATRACTIVO'])->on('tipo_estado_atractivo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('estado_atractivo', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_99');
        });
    }
}
