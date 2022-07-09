<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToRecursosAtractivosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('recursos_atractivos', function (Blueprint $table) {
            $table->foreign(['ID_USUARIO'], 'FK_REFERENCE_1')->references(['ID_USUARIO'])->on('usuario');
            $table->foreign(['ID_TIPO_RECURSO_ATRACTIVO'], 'FK_REFERENCE_100')->references(['ID_TIPO_RECURSO_ATRACTIVO'])->on('tipo_recurso_atractivo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('recursos_atractivos', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_1');
            $table->dropForeign('FK_REFERENCE_100');
        });
    }
}
