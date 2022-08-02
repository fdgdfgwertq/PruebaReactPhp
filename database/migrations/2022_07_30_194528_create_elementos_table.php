<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateElementosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('elementos', function (Blueprint $table) {
            $table->integer('ID_ELEMENTO');
            $table->integer('ID_COMPONENTE');
            $table->integer('ID_GRUPO');
            $table->integer('ID_TIPO_PATRIMONIO');
            $table->string('ELEMENTO', 400);

            $table->index(['ID_COMPONENTE', 'ID_GRUPO', 'ID_TIPO_PATRIMONIO'], 'FK_REFERENCE_21');
            $table->primary(['ID_ELEMENTO', 'ID_COMPONENTE', 'ID_GRUPO', 'ID_TIPO_PATRIMONIO']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('elementos');
    }
}
