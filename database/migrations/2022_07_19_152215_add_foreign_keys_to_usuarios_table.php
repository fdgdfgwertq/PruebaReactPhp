<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('usuarios', function (Blueprint $table) {
            $table->foreign(['ID_TIPO_USUARIO'], 'FK_REFERENCE_1')->references(['ID_TIPO_USUARIO'])->on('tipos_usuario');
            $table->foreign(['ID_ESTADO'], 'FK_REFERENCE_82')->references(['ID_ESTADO'])->on('estado_usuarios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('usuarios', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_1');
            $table->dropForeign('FK_REFERENCE_82');
        });
    }
}
