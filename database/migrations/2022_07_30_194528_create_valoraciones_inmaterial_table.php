<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateValoracionesInmaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('valoraciones_inmaterial', function (Blueprint $table) {
            $table->integer('ID_VALORACION_INMATERIAL', true);
            $table->integer('ID_CALIDAD_INMATERIAL')->nullable()->index('FK_REFERENCE_33');
            $table->integer('ID_SIGNIFICADO')->nullable()->index('FK_REFERENCE_34');
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
        Schema::dropIfExists('valoraciones_inmaterial');
    }
}
