<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToValoracionesInmaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('valoraciones_inmaterial', function (Blueprint $table) {
            $table->foreign(['ID_CALIDAD_INMATERIAL'], 'FK_REFERENCE_33')->references(['ID_CALIDAD_INMATERIAL'])->on('calidades_inmaterial');
            $table->foreign(['ID_SIGNIFICADO'], 'FK_REFERENCE_34')->references(['ID_SIGNIFICADO'])->on('significado');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('valoraciones_inmaterial', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_33');
            $table->dropForeign('FK_REFERENCE_34');
        });
    }
}
