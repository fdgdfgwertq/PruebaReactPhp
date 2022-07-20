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
            $table->foreign(['ID_CLIMA'], 'FK_REFERENCE_44')->references(['ID_CLIMA'])->on('climas');
            $table->foreign(['ID_HORARIO'], 'FK_REFERENCE_46')->references(['ID_HORARIO'])->on('horarios');
            $table->foreign(['ID_TARIFA'], 'FK_REFERENCE_47')->references(['ID_TARIFA'])->on('tarifas');
            $table->foreign(['ID_ESTADO'], 'FK_REFERENCE_48')->references(['ID_ESTADO'])->on('estado_atractivo');
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
            $table->dropForeign('FK_REFERENCE_44');
            $table->dropForeign('FK_REFERENCE_46');
            $table->dropForeign('FK_REFERENCE_47');
            $table->dropForeign('FK_REFERENCE_48');
        });
    }
}
