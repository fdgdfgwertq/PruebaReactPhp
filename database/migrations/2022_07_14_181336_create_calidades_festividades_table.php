<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalidadesFestividadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calidades_festividades', function (Blueprint $table) {
            $table->integer('ID_CALIDAD_FESTIVIDAD', true);
            $table->integer('ORGANIZACION');
            $table->integer('B_SOCIOCULTURALES');
            $table->integer('B_ECONOMICOS');
            $table->float('SUBTOTAL', 10, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('calidades_festividades');
    }
}
