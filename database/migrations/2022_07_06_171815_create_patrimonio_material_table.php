<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatrimonioMaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patrimonio_material', function (Blueprint $table) {
            $table->integer('ID_PATRIMONIO_MATERIAL', true);
            $table->integer('ID_USUARIO')->index('FK_REFERENCE_3');
            $table->integer('ID_GENERALIDADES')->index('FK_REFERENCE_7');
            $table->integer('ID_CARACTERISTICAS')->index('FK_REFERENCE_8');
            $table->integer('ID_IMAGENES')->index('FK_REFERENCE_9');
            $table->integer('ID_CARACTERISTICAS_RELEVANTES')->index('FK_REFERENCE_17');
            $table->integer('ID_ACTIVIDADES_SERVICIOS')->index('FK_REFERENCE_22');
            $table->integer('ID_PROMOCION_ATRACTIVO')->index('FK_REFERENCE_24');
            $table->integer('ID_SERVICIOS_PERSONAS_DISCAPACITADAS')->index('FK_REFERENCE_26');
            $table->integer('ID_DATOS_PROPIETARIO')->index('FK_REFERENCE_33');
            $table->integer('ID_REDES_SOCIALES')->index('FK_REFERENCE_34');
            $table->integer('ID_PUNTAJES_VALORACION_PATRIMONIO_MATERIAL')->index('FK_REFERENCE_103');
            $table->string('REFERENCIA_BIBLIOGRAFICA', 200);
            $table->string('OBSERVACIONES', 200);
            $table->timestamp('FECHA_ACTUALIZACION')->useCurrent();
            $table->timestamp('FECHA_CREACION')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patrimonio_material');
    }
}
