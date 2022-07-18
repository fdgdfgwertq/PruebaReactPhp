<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitiosNaturalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sitios_naturales', function (Blueprint $table) {
            $table->integer('ID_SITIO', true);
            $table->integer('ID_GENERALIDAD')->nullable()->index('FK_REFERENCE_16');
            $table->integer('ID_CARACTERISTICA')->nullable()->index('FK_REFERENCE_28');
            $table->integer('ID_VALORACION_SITIO')->nullable()->index('FK_REFERENCE_40');
            $table->integer('ID_RELEVANTE')->nullable()->index('FK_REFERENCE_52');
            $table->integer('ID_ACTIVIDAD')->nullable()->index('FK_REFERENCE_62');
            $table->integer('ID_SERVICIO')->nullable()->index('FK_REFERENCE_63');
            $table->integer('ID_PROMOCION')->nullable()->index('FK_REFERENCE_69');
            $table->integer('ID_SERVICIO_ESPECIAL')->nullable()->index('FK_REFERENCE_72');
            $table->integer('ID_RED_SOCIAL')->nullable()->index('FK_REFERENCE_77');
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
        Schema::dropIfExists('sitios_naturales');
    }
}
