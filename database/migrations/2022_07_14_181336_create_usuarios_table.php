<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->integer('ID_USUARIO', true);
            $table->integer('ID_TIPO_USUARIO')->index('FK_REFERENCE_1');
            $table->integer('ID_ESTADO')->index('FK_REFERENCE_82');
            $table->string('PRIMER_NOMBRE', 50);
            $table->string('SEGUNDO_NOMBRE', 50)->nullable();
            $table->string('PRIMER_APELLIDO', 50);
            $table->string('SEGUNDO_APELLIDO', 50)->nullable();
            $table->string('USUARIO', 50);
            $table->string('CORREO', 200);
            $table->string('CLAVE', 200);
            $table->timestamp('FECHA_CREACION')->useCurrent();
            $table->integer('ID_USUARIO_CREADOR');
            $table->timestamp('FECHA_ACTUALIZACION')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}
