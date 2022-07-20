<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToCorregimientosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('corregimientos', function (Blueprint $table) {
            $table->foreign(['ID_MUNICIPIOS', 'ID_DEPARTAMENTOS'], 'FK_REFERENCE_78')->references(['ID_MUNICIPIOS', 'ID_DEPARTAMENTOS'])->on('municipios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('corregimientos', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_78');
        });
    }
}
