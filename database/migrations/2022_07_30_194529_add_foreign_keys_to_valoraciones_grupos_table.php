<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToValoracionesGruposTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('valoraciones_grupos', function (Blueprint $table) {
            $table->foreign(['ID_SIGNIFICADO'], 'FK_REFERENCE_38')->references(['ID_SIGNIFICADO'])->on('significado');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('valoraciones_grupos', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_38');
        });
    }
}
