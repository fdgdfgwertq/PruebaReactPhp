<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComponentesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('componentes', function (Blueprint $table) {
            $table->integer('ID_COMPONENTE');
            $table->integer('ID_GRUPO');
            $table->integer('ID_TIPO_PATRIMONIO');
            $table->string('COMPONENTE', 80);

            $table->index(['ID_GRUPO', 'ID_TIPO_PATRIMONIO'], 'FK_REFERENCE_20');
            $table->primary(['ID_COMPONENTE', 'ID_GRUPO', 'ID_TIPO_PATRIMONIO']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('componentes');
    }
}
