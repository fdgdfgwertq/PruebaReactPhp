<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateValoracionesSitiosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('valoraciones_sitios', function (Blueprint $table) {
            $table->integer('ID_VALORACION_SITIO', true);
            $table->integer('ID_CALIDAD_SITIO')->nullable()->index('FK_REFERENCE_41');
            $table->integer('ID_SIGNIFICADO')->nullable()->index('FK_REFERENCE_42');
            $table->float('TOTAL', 10, 0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('valoraciones_sitios');
    }
}
