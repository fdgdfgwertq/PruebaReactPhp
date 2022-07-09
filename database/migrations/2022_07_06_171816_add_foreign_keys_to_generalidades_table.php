<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToGeneralidadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('generalidades', function (Blueprint $table) {
            $table->foreign(['ID_DEPARTAMENTO'], 'FK_REFERENCE_4')->references(['ID_DEPARTAMENTO'])->on('departamento');
            $table->foreign(['ID_MUNICIPIO'], 'FK_REFERENCE_5')->references(['ID_MUNICIPIO'])->on('municipio');
            $table->foreign(['ID_TIPO_DE_ACCESO'], 'FK_REFERENCE_6')->references(['ID_TIPO_DE_ACCESO'])->on('tipo_de_acceso');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('generalidades', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_4');
            $table->dropForeign('FK_REFERENCE_5');
            $table->dropForeign('FK_REFERENCE_6');
        });
    }
}
