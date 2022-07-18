<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToValoracionesFestividadTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('valoraciones_festividad', function (Blueprint $table) {
            $table->foreign(['ID_CALIDAD_FESTIVIDAD'], 'FK_REFERENCE_36')->references(['ID_CALIDAD_FESTIVIDAD'])->on('calidades_festividades');
            $table->foreign(['ID_SIGNIFICADO'], 'FK_REFERENCE_37')->references(['ID_SIGNIFICADO'])->on('significado');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('valoraciones_festividad', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_36');
            $table->dropForeign('FK_REFERENCE_37');
        });
    }
}
