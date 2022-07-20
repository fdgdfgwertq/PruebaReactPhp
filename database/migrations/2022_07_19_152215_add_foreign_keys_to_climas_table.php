<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToClimasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('climas', function (Blueprint $table) {
            $table->foreign(['ID_TIPO_CLIMA'], 'FK_REFERENCE_43')->references(['ID_TIPO_CLIMA'])->on('tipos_clima');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('climas', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_43');
        });
    }
}
