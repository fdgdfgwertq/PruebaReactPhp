<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecursosAtractivosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recursos_atractivos', function (Blueprint $table) {
            $table->integer('ID_RECURSOS_ATRACTIVOS', true);
            $table->integer('ID_USUARIO')->index('FK_REFERENCE_1');
            $table->integer('ID_TIPO_RECURSO_ATRACTIVO')->index('FK_REFERENCE_100');
            $table->string('NOMBRE', 50);
            $table->string('DIRECCION', 50);
            $table->timestamp('FECHA')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recursos_atractivos');
    }
}
