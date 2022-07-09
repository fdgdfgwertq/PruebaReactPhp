<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalidadFestividadesEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calidad_festividades_eventos', function (Blueprint $table) {
            $table->integer('ID_CALIDAD_FESTIVIDADES_EVENTOS', true);
            $table->integer('ORGANIZACION_EVENTO')->default(0);
            $table->integer('BENEFICIOS_SOCIOCULTURALES_COMUNIDAD')->default(0);
            $table->integer('BENEFICIOS_ECONOMICOS_LOCALES')->default(0);
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
        Schema::dropIfExists('calidad_festividades_eventos');
    }
}
