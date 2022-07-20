<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActividadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actividades', function (Blueprint $table) {
            $table->integer('ID_ACTIVIDAD', true);
            $table->string('CULTURALES', 300)->nullable();
            $table->string('ARTISTICAS', 300)->nullable();
            $table->string('FISICAS', 300)->nullable();
            $table->string('RECREATIVAS', 300)->nullable();
            $table->string('OTROS', 300)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('actividades');
    }
}
