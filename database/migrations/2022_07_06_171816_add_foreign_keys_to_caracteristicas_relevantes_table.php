<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToCaracteristicasRelevantesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('caracteristicas_relevantes', function (Blueprint $table) {
            $table->foreign(['ID_TARIFAS'], 'FK_REFERENCE_15')->references(['ID_TARIFAS'])->on('tarifas');
            $table->foreign(['ID_CLIMA'], 'FK_REFERENCE_93')->references(['ID_CLIMA'])->on('clima');
            $table->foreign(['ID_HORARIO'], 'FK_REFERENCE_94')->references(['ID_HORARIO'])->on('horario');
            $table->foreign(['ID_ESTADO_ATRACTIVO'], 'FK_REFERENCE_95')->references(['ID_ESTADO_ATRACTIVO'])->on('estado_atractivo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('caracteristicas_relevantes', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_15');
            $table->dropForeign('FK_REFERENCE_93');
            $table->dropForeign('FK_REFERENCE_94');
            $table->dropForeign('FK_REFERENCE_95');
        });
    }
}
