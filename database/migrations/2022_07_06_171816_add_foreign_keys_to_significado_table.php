<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToSignificadoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('significado', function (Blueprint $table) {
            $table->foreign(['ID_TIPO_SIGNIFICADO'], 'FK_REFERENCE_29')->references(['ID_TIPO_SIGNIFICADO'])->on('tipo_significado');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('significado', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_29');
        });
    }
}
