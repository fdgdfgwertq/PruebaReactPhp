<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToCodigosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('codigos', function (Blueprint $table) {
            $table->foreign(['ID_MUNICIPIOS', 'ID_DEPARTAMENTOS'], 'FK_REFERENCE_17')->references(['ID_MUNICIPIOS', 'ID_DEPARTAMENTOS'])->on('municipios');
            $table->foreign(['ID_ELEMENTO', 'ID_COMPONENTE', 'ID_GRUPO', 'ID_TIPO_PATRIMONIO'], 'FK_REFERENCE_22')->references(['ID_ELEMENTO', 'ID_COMPONENTE', 'ID_GRUPO', 'ID_TIPO_PATRIMONIO'])->on('elementos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('codigos', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_17');
            $table->dropForeign('FK_REFERENCE_22');
        });
    }
}
