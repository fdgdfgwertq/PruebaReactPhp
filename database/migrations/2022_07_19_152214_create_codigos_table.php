<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCodigosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('codigos', function (Blueprint $table) {
            $table->integer('ID_CODIGO', true);
            $table->string('ID_MUNICIPIOS', 3);
            $table->string('ID_DEPARTAMENTOS', 2);
            $table->integer('ID_ELEMENTO')->nullable();
            $table->integer('ID_COMPONENTE')->nullable();
            $table->integer('ID_GRUPO')->nullable();
            $table->integer('ID_TIPO_PATRIMONIO')->nullable();
            $table->integer('ORDEN_ALFABETICO')->nullable();

            $table->index(['ID_MUNICIPIOS', 'ID_DEPARTAMENTOS'], 'FK_REFERENCE_17');
            $table->index(['ID_ELEMENTO', 'ID_COMPONENTE', 'ID_GRUPO', 'ID_TIPO_PATRIMONIO'], 'FK_REFERENCE_22');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('codigos');
    }
}
