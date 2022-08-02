<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHistorialInsertDeleteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('historial_insert_delete', function (Blueprint $table) {
            $table->integer('ID_HISTORIAL_IN_DE', true);
            $table->integer('ID_USUARIO')->index('FK_REFERENCE_83');
            $table->timestamp('FECHA_MOVIMIENTO')->useCurrent();
            $table->string('TABLA_MOVIMIENTO', 100);
            $table->integer('ID_REGISTRO_MOVIMIENTO');
            $table->integer('TIPO_MOVIMIENTO');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('historial_insert_delete');
    }
}
