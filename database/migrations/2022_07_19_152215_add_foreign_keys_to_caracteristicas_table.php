<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToCaracteristicasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('caracteristicas', function (Blueprint $table) {
            $table->foreign(['ID_IMAGEN'], 'FK_REFERENCE_23')->references(['ID_IMAGEN'])->on('imagenes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('caracteristicas', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_23');
        });
    }
}
