<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateListadosPreliminaresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listados_preliminares', function (Blueprint $table) {
            $table->integer('ID_LISTADO', true);
            $table->integer('ID_FUENTE')->nullable()->index('FK_REFERENCE_4');
            $table->integer('ID_TIPO_BIEN')->nullable()->index('FK_REFERENCE_5');
            $table->integer('ID_USUARIO')->nullable()->index('FK_REFERENCE_6');
            $table->integer('ID_CODIGO')->index('FK_REFERENCE_18');
            $table->string('NOMBRE', 200)->nullable();
            $table->string('UBICACION', 200)->nullable();
            $table->timestamp('FECHA_CREACION')->useCurrent();
            $table->timestamp('FECHA_ACTUALIZACION')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('listados_preliminares');
    }
}
