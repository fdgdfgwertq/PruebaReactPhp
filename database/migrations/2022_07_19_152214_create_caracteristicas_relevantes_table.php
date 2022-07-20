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
            $table->integer('ID_RELEVANTE', true);
            $table->integer('ID_CLIMA')->nullable()->index('FK_REFERENCE_44');
            $table->integer('ID_HORARIO')->nullable()->index('FK_REFERENCE_46');
            $table->integer('ID_TARIFA')->nullable()->index('FK_REFERENCE_47');
            $table->integer('ID_ESTADO')->nullable()->index('FK_REFERENCE_48');
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
