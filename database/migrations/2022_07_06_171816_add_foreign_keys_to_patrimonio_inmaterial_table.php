<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPatrimonioInmaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('patrimonio_inmaterial', function (Blueprint $table) {
            $table->foreign(['ID_GENERALIDADES'], 'FK_REFERENCE_35')->references(['ID_GENERALIDADES'])->on('generalidades');
            $table->foreign(['ID_CARACTERISTICAS'], 'FK_REFERENCE_36')->references(['ID_CARACTERISTICAS'])->on('caracteristicas');
            $table->foreign(['ID_IMAGENES'], 'FK_REFERENCE_37')->references(['ID_IMAGENES'])->on('imagenes');
            $table->foreign(['ID_PUNTAJES_VALORACION_PATRIMONIO_INMATERIAL'], 'FK_REFERENCE_41')->references(['ID_PUNTAJES_VALORACION_PATRIMONIO_INMATERIAL'])->on('puntajes_valoracion_patrimonio_inmaterial');
            $table->foreign(['ID_PROMOCION_ATRACTIVO'], 'FK_REFERENCE_43')->references(['ID_PROMOCION_ATRACTIVO'])->on('promocion_atractivo');
            $table->foreign(['ID_REDES_SOCIALES'], 'FK_REFERENCE_44')->references(['ID_REDES_SOCIALES'])->on('redes_sociales');
            $table->foreign(['ID_ACTIVIDADES_SERVICIOS'], 'FK_REFERENCE_78')->references(['ID_ACTIVIDADES_SERVICIOS'])->on('actividades_servicios');
            $table->foreign(['ID_USUARIO'], 'FK_REFERENCE_85')->references(['ID_USUARIO'])->on('usuario');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('patrimonio_inmaterial', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_35');
            $table->dropForeign('FK_REFERENCE_36');
            $table->dropForeign('FK_REFERENCE_37');
            $table->dropForeign('FK_REFERENCE_41');
            $table->dropForeign('FK_REFERENCE_43');
            $table->dropForeign('FK_REFERENCE_44');
            $table->dropForeign('FK_REFERENCE_78');
            $table->dropForeign('FK_REFERENCE_85');
        });
    }
}
