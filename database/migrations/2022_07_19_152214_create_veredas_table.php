<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVeredasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('veredas', function (Blueprint $table) {
            $table->string('ID_VEREDA', 5);
            $table->string('ID_CORREGIMIENTO', 5);
            $table->string('ID_MUNICIPIOS', 3);
            $table->string('ID_DEPARTAMENTOS', 2);
            $table->string('VEREDA', 200);

            $table->index(['ID_CORREGIMIENTO', 'ID_MUNICIPIOS', 'ID_DEPARTAMENTOS'], 'FK_REFERENCE_79');
            $table->primary(['ID_VEREDA', 'ID_CORREGIMIENTO', 'ID_MUNICIPIOS', 'ID_DEPARTAMENTOS']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('veredas');
    }
}
