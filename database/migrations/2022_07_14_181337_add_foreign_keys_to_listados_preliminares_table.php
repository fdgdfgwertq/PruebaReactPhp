<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToListadosPreliminaresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('listados_preliminares', function (Blueprint $table) {
            $table->foreign(['ID_CODIGO'], 'FK_REFERENCE_18')->references(['ID_CODIGO'])->on('codigos');
            $table->foreign(['ID_FUENTE'], 'FK_REFERENCE_4')->references(['ID_FUENTE'])->on('fuentes');
            $table->foreign(['ID_TIPO_BIEN'], 'FK_REFERENCE_5')->references(['ID_TIPO_BIEN'])->on('tipos_bien');
            $table->foreign(['ID_USUARIO'], 'FK_REFERENCE_6')->references(['ID_USUARIO'])->on('usuarios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('listados_preliminares', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_18');
            $table->dropForeign('FK_REFERENCE_4');
            $table->dropForeign('FK_REFERENCE_5');
            $table->dropForeign('FK_REFERENCE_6');
        });
    }
}
