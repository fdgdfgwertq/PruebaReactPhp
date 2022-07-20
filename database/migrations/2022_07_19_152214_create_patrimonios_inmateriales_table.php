<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatrimoniosInmaterialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patrimonios_inmateriales', function (Blueprint $table) {
            $table->integer('ID_INMATERIAL', true);
            $table->integer('ID_GENERALIDAD')->nullable()->index('FK_REFERENCE_13');
            $table->integer('ID_CARACTERISTICA')->nullable()->index('FK_REFERENCE_25');
            $table->integer('ID_VALORACION_INMATERIAL')->nullable()->index('FK_REFERENCE_32');
            $table->integer('ID_ACTIVIDAD')->nullable()->index('FK_REFERENCE_57');
            $table->integer('ID_PROMOCION')->nullable()->index('FK_REFERENCE_66');
            $table->integer('ID_RED_SOCIAL')->nullable()->index('FK_REFERENCE_74');
            $table->integer('ID_LISTADO')->nullable()->index('FK_REFERENCE_85');
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
        Schema::dropIfExists('patrimonios_inmateriales');
    }
}
