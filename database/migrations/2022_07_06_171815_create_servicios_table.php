<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiciosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servicios', function (Blueprint $table) {
            $table->integer('ID_SERVICIOS', true);
            $table->string('RESTAURANTE', 200)->default('No aplica');
            $table->string('TIENDA', 200)->default('No aplica');
            $table->string('CAMPING', 200)->default('No aplica');
            $table->string('OTROS', 200)->default('No aplica');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('servicios');
    }
}
