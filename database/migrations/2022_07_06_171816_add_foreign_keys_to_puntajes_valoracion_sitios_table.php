<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPuntajesValoracionSitiosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('puntajes_valoracion_sitios', function (Blueprint $table) {
            $table->foreign(['ID_SIGNIFICADO'], 'FK_REFERENCE_72')->references(['ID_SIGNIFICADO'])->on('significado');
            $table->foreign(['ID_CALIDAD_SITIOS_NATURALES'], 'FK_REFERENCE_89')->references(['ID_CALIDAD_SITIOS_NATURALES'])->on('calidad_sitios_naturales');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('puntajes_valoracion_sitios', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_72');
            $table->dropForeign('FK_REFERENCE_89');
        });
    }
}
