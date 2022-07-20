<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToHistorialUpdateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('historial_update', function (Blueprint $table) {
            $table->foreign(['ID_USUARIO'], 'FK_REFERENCE_81')->references(['ID_USUARIO'])->on('usuarios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('historial_update', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_81');
        });
    }
}
