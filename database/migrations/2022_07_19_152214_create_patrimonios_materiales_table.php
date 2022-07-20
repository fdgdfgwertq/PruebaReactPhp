<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatrimoniosMaterialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patrimonios_materiales', function (Blueprint $table) {
            $table->integer('ID_MATERIAL', true);
            $table->integer('ID_GENERALIDAD')->nullable()->index('FK_REFERENCE_12');
            $table->integer('ID_CARACTERISTICA')->nullable()->index('FK_REFERENCE_24');
            $table->integer('ID_VALORACION_MATERIAL')->nullable()->index('FK_REFERENCE_31');
            $table->integer('ID_RELEVANTE')->nullable()->index('FK_REFERENCE_49');
            $table->integer('ID_ACTIVIDAD')->nullable()->index('FK_REFERENCE_53');
            $table->integer('ID_SERVICIO')->nullable()->index('FK_REFERENCE_56');
            $table->integer('ID_PROMOCION')->nullable()->index('FK_REFERENCE_65');
            $table->integer('ID_SERVICIO_ESPECIAL')->nullable()->index('FK_REFERENCE_64');
            $table->integer('ID_RED_SOCIAL')->nullable()->index('FK_REFERENCE_73');
            $table->integer('ID_LISTADO')->nullable()->index('FK_REFERENCE_84');
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
        Schema::dropIfExists('patrimonios_materiales');
    }
}
