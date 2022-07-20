<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminPropietariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_propietarios', function (Blueprint $table) {
            $table->integer('ID_ADMIN', true);
            $table->string('NOMBRE', 200)->nullable();
            $table->string('DIRECCION_UBICACION', 200)->nullable();
            $table->string('CORREO', 200)->nullable();
            $table->integer('TELEFONO1')->nullable();
            $table->integer('TELEFONO2')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admin_propietarios');
    }
}
