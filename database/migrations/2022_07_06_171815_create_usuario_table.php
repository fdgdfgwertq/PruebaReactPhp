<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario', function (Blueprint $table) {
            $table->integer('ID_USUARIO', true);
            $table->integer('ID_TIPO_USUARIO')->index('FK_REFERENCE_87');
            $table->string('PRIMER_NOMBRE', 50);
            $table->string('SEGUNDO_NOMBRE', 50)->nullable();
            $table->string('PRIMER_APELLIDO', 50);
            $table->string('SEGUNDO_APELLIDO', 50);
            $table->string('USUARIO', 50);
            $table->string('CORREO', 100);
            $table->string('CLAVE', 200);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuario');
    }
}
