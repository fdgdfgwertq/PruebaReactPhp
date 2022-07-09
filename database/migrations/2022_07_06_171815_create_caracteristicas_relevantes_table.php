<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaracteristicasRelevantesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('caracteristicas_relevantes', function (Blueprint $table) {
            $table->integer('ID_CARACTERISTICAS_RELEVANTES', true);
            $table->integer('ID_TARIFAS')->index('FK_REFERENCE_15');
            $table->integer('ID_CLIMA')->index('FK_REFERENCE_93');
            $table->integer('ID_HORARIO')->index('FK_REFERENCE_94');
            $table->integer('ID_ESTADO_ATRACTIVO')->index('FK_REFERENCE_95');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('caracteristicas_relevantes');
    }
}
