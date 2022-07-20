<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPatrimoniosMaterialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('patrimonios_materiales', function (Blueprint $table) {
            $table->foreign(['ID_GENERALIDAD'], 'FK_REFERENCE_12')->references(['ID_GENERALIDAD'])->on('generalidades');
            $table->foreign(['ID_CARACTERISTICA'], 'FK_REFERENCE_24')->references(['ID_CARACTERISTICA'])->on('caracteristicas');
            $table->foreign(['ID_VALORACION_MATERIAL'], 'FK_REFERENCE_31')->references(['ID_VALORACION_MATERIAL'])->on('valoraciones_material');
            $table->foreign(['ID_RELEVANTE'], 'FK_REFERENCE_49')->references(['ID_RELEVANTE'])->on('caracteristicas_relevantes');
            $table->foreign(['ID_ACTIVIDAD'], 'FK_REFERENCE_53')->references(['ID_ACTIVIDAD'])->on('actividades');
            $table->foreign(['ID_SERVICIO'], 'FK_REFERENCE_56')->references(['ID_SERVICIO'])->on('servicios');
            $table->foreign(['ID_SERVICIO_ESPECIAL'], 'FK_REFERENCE_64')->references(['ID_SERVICIO_ESPECIAL'])->on('servicios_especiales');
            $table->foreign(['ID_PROMOCION'], 'FK_REFERENCE_65')->references(['ID_PROMOCION'])->on('promocion');
            $table->foreign(['ID_RED_SOCIAL'], 'FK_REFERENCE_73')->references(['ID_RED_SOCIAL'])->on('redes');
            $table->foreign(['ID_LISTADO'], 'FK_REFERENCE_84')->references(['ID_LISTADO'])->on('listados_preliminares');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('patrimonios_materiales', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_12');
            $table->dropForeign('FK_REFERENCE_24');
            $table->dropForeign('FK_REFERENCE_31');
            $table->dropForeign('FK_REFERENCE_49');
            $table->dropForeign('FK_REFERENCE_53');
            $table->dropForeign('FK_REFERENCE_56');
            $table->dropForeign('FK_REFERENCE_64');
            $table->dropForeign('FK_REFERENCE_65');
            $table->dropForeign('FK_REFERENCE_73');
            $table->dropForeign('FK_REFERENCE_84');
        });
    }
}
