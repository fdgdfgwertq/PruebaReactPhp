<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGruposEspecialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grupos_especiales', function (Blueprint $table) {
            $table->integer('ID_GRUPO', true);
            $table->integer('ID_GENERALIDAD')->nullable()->index('FK_REFERENCE_15');
            $table->integer('ID_CARACTERISTICA')->nullable()->index('FK_REFERENCE_27');
            $table->integer('ID_VALORACION_GRUPO')->nullable()->index('FK_REFERENCE_39');
            $table->integer('ID_RELEVANTE')->nullable()->index('FK_REFERENCE_51');
            $table->integer('ID_ACTIVIDAD')->nullable()->index('FK_REFERENCE_60');
            $table->integer('ID_SERVICIO')->nullable()->index('FK_REFERENCE_61');
            $table->integer('ID_PROMOCION')->nullable()->index('FK_REFERENCE_68');
            $table->integer('ID_SERVICIO_ESPECIAL')->nullable()->index('FK_REFERENCE_71');
            $table->integer('ID_RED_SOCIAL')->nullable()->index('FK_REFERENCE_76');
            $table->integer('ID_LISTADO')->nullable()->index('FK_REFERENCE_87');
            $table->string('REF_BIBLIOGRAFICA', 300)->nullable();
            $table->string('OBSERVACIONES', 300)->nullable();
            $table->boolean('APRO_INTERNACIONAL')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grupos_especiales');
    }
}
