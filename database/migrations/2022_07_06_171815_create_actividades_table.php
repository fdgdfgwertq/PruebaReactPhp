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
            $table->integer('ID_ACTIVIDADES', true);
            $table->string('CULTURALES', 200)->default('No aplica');
            $table->string('ARTISTICAS', 200)->default('No aplica');
            $table->string('FISICAS', 200)->default('No aplica');
            $table->string('RECREATIVAS', 200)->default('No aplica');
            $table->string('OTRAS', 200)->default('No aplica');
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
