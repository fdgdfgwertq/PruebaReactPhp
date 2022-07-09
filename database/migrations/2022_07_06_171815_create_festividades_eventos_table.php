<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFestividadesEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('festividades_eventos', function (Blueprint $table) {
            $table->integer('ID_FESTIVIDADES_EVENTOS', true);
            $table->integer('ID_GENERALIDADES')->index('FK_REFERENCE_45');
            $table->integer('ID_CARACTERISTICAS')->nullable()->index('FK_REFERENCE_46');
            $table->integer('ID_IMAGENES')->index('FK_REFERENCE_47');
            $table->integer('ID_CARACTERISTICAS_RELEVANTES')->index('FK_REFERENCE_52');
            $table->integer('ID_ACTIVIDADES_SERVICIOS')->index('FK_REFERENCE_53');
            $table->integer('ID_PROMOCION_ATRACTIVO')->index('FK_REFERENCE_54');
            $table->integer('ID_SERVICIOS_PERSONAS_DISCAPACITADAS')->index('FK_REFERENCE_55');
            $table->integer('ID_DATOS_PROPIETARIO')->index('FK_REFERENCE_56');
            $table->integer('ID_REDES_SOCIALES')->nullable()->index('FK_REFERENCE_57');
            $table->integer('ID_USUARIO')->index('FK_REFERENCE_86');
            $table->integer('ID_PUNTAJES_VALORACION_FESTIVIDADES_EVENTOS')->index('FK_REFERENCE_92');
            $table->string('REFERENCIAS_BIBLIOGRAFICAS', 200);
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
        Schema::dropIfExists('festividades_eventos');
    }
}
