<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateValoracionesGruposTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('valoraciones_grupos', function (Blueprint $table) {
            $table->integer('ID_VALORACION_GRUPOS', true);
            $table->integer('ID_SIGNIFICADO')->nullable()->index('FK_REFERENCE_38');
            $table->integer('R_COSTUMBRES')->nullable();
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
        Schema::dropIfExists('valoraciones_grupos');
    }
}
