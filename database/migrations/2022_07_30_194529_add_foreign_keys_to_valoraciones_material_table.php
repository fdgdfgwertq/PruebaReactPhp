<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToValoracionesMaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('valoraciones_material', function (Blueprint $table) {
            $table->foreign(['ID_CALIDAD_MATERIAL'], 'FK_REFERENCE_29')->references(['ID_CALIDAD_MATERIAL'])->on('calidades_material');
            $table->foreign(['ID_SIGNIFICADO'], 'FK_REFERENCE_30')->references(['ID_SIGNIFICADO'])->on('significado');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('valoraciones_material', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_29');
            $table->dropForeign('FK_REFERENCE_30');
        });
    }
}
