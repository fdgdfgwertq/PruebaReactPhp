<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneralidadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('generalidades', function (Blueprint $table) {
            $table->integer('ID_GENERALIDAD', true);
            $table->integer('ID_LISTADO')->index('FK_REFERENCE_9');
            $table->integer('ID_ADMIN')->nullable()->index('FK_REFERENCE_10');
            $table->integer('ID_TIPO_ACCESO')->nullable()->index('FK_REFERENCE_11');
            $table->string('CORREGIMIENTO_VEREDA_LOCALIDAD', 200)->nullable();
            $table->string('GEORREFERENCIACION', 50)->nullable();
            $table->string('INDICACIONES_ACCESO', 300)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('generalidades');
    }
}
