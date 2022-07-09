<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatrimonioInmaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patrimonio_inmaterial', function (Blueprint $table) {
            $table->integer('ID_PATRIMONIO_INMATERIAL', true);
            $table->integer('ID_GENERALIDADES')->index('FK_REFERENCE_35');
            $table->integer('ID_CARACTERISTICAS')->index('FK_REFERENCE_36');
            $table->integer('ID_IMAGENES')->index('FK_REFERENCE_37');
            $table->integer('ID_PUNTAJES_VALORACION_PATRIMONIO_INMATERIAL')->index('FK_REFERENCE_41');
            $table->integer('ID_PROMOCION_ATRACTIVO')->index('FK_REFERENCE_43');
            $table->integer('ID_REDES_SOCIALES')->index('FK_REFERENCE_44');
            $table->integer('ID_ACTIVIDADES_SERVICIOS')->index('FK_REFERENCE_78');
            $table->integer('ID_USUARIO')->index('FK_REFERENCE_85');
            $table->string('REFERENCIA_BIBLIOGRAFICA', 200);
            $table->string('OBSERVACIONES', 200);
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
        Schema::dropIfExists('patrimonio_inmaterial');
    }
}
