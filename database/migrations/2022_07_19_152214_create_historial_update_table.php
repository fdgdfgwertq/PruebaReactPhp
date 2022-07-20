<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHistorialUpdateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('historial_update', function (Blueprint $table) {
            $table->integer('ID_HISTORIAL_UP', true);
            $table->integer('ID_USUARIO')->index('FK_REFERENCE_81');
            $table->timestamp('FECHA_MODIFICACION')->useCurrent();
            $table->string('TABLA_MODIFICADA', 100);
            $table->integer('ID_REGISTRO_MODIFICADO');
            $table->string('CAMPO_MODIFICADO', 100);
            $table->string('VALOR_OLD', 300);
            $table->string('VALOR_NEW', 300);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('historial_update');
    }
}
