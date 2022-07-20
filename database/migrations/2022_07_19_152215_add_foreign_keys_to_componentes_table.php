<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToComponentesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('componentes', function (Blueprint $table) {
            $table->foreign(['ID_GRUPO', 'ID_TIPO_PATRIMONIO'], 'FK_REFERENCE_20')->references(['ID_GRUPO', 'ID_TIPO_PATRIMONIO'])->on('grupos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('componentes', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_20');
        });
    }
}
