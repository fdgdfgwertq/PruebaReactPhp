<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFestividadesEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('festividades_eventos', function (Blueprint $table) {
            $table->integer('ID_EVENTO', true);
            $table->integer('ID_GENERALIDAD')->nullable()->index('FK_REFERENCE_14');
            $table->integer('ID_CARACTERISTICA')->nullable()->index('FK_REFERENCE_26');
            $table->integer('ID_VALORACION_FESTIVIDAD')->nullable()->index('FK_REFERENCE_35');
            $table->integer('ID_RELEVANTE')->nullable()->index('FK_REFERENCE_50');
            $table->integer('ID_ACTIVIDAD')->nullable()->index('FK_REFERENCE_58');
            $table->integer('ID_SERVICIO')->nullable()->index('FK_REFERENCE_59');
            $table->integer('ID_PROMOCION')->nullable()->index('FK_REFERENCE_67');
            $table->integer('ID_SERVICIO_ESPECIAL')->nullable()->index('FK_REFERENCE_70');
            $table->integer('ID_RED_SOCIAL')->nullable()->index('FK_REFERENCE_75');
            $table->string('REF_BIBLIOGRAFICA', 300)->nullable();
            $table->string('OBSERVACIONES', 300)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('festividades_eventos');
    }
}
