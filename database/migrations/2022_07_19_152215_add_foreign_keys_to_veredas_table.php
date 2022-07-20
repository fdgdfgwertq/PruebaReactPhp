<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToVeredasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('veredas', function (Blueprint $table) {
            $table->foreign(['ID_CORREGIMIENTO', 'ID_MUNICIPIOS', 'ID_DEPARTAMENTOS'], 'FK_REFERENCE_79')->references(['ID_CORREGIMIENTO', 'ID_MUNICIPIOS', 'ID_DEPARTAMENTOS'])->on('corregimientos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('veredas', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_79');
        });
    }
}
