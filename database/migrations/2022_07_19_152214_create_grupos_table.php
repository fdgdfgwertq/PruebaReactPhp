<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGruposTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grupos', function (Blueprint $table) {
            $table->integer('ID_GRUPO');
            $table->integer('ID_TIPO_PATRIMONIO')->index('FK_REFERENCE_19');
            $table->string('GRUPO', 80);

            $table->primary(['ID_GRUPO', 'ID_TIPO_PATRIMONIO']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grupos');
    }
}
