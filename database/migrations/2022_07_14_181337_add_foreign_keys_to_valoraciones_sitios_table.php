<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToValoracionesSitiosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('valoraciones_sitios', function (Blueprint $table) {
            $table->foreign(['ID_CALIDAD_SITIO'], 'FK_REFERENCE_41')->references(['ID_CALIDAD_SITIO'])->on('calidades_sitios');
            $table->foreign(['ID_SIGNIFICADO'], 'FK_REFERENCE_42')->references(['ID_SIGNIFICADO'])->on('significado');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('valoraciones_sitios', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_41');
            $table->dropForeign('FK_REFERENCE_42');
        });
    }
}
