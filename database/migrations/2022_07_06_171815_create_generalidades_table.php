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
            $table->integer('ID_GENERALIDADES', true);
            $table->integer('ID_DEPARTAMENTO')->index('FK_REFERENCE_4');
            $table->integer('ID_MUNICIPIO')->index('FK_REFERENCE_5');
            $table->integer('ID_TIPO_DE_ACCESO')->index('FK_REFERENCE_6');
            $table->string('NOMBRE', 50);
            $table->integer('CORREGIMIENTO');
            $table->string('ADMINISTRADOR', 50);
            $table->string('DIRECCION', 50)->nullable();
            $table->bigInteger('TELEFONO')->nullable();
            $table->string('DATOS_GEORREFERENCIACION', 50);
            $table->string('INDICACIONES_ACCESO', 200)->nullable();
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
