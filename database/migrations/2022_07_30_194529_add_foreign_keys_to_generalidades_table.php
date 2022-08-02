<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToGeneralidadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('generalidades', function (Blueprint $table) {
            $table->foreign(['ID_ADMIN'], 'FK_REFERENCE_10')->references(['ID_ADMIN'])->on('admin_propietarios');
            $table->foreign(['ID_TIPO_ACCESO'], 'FK_REFERENCE_11')->references(['ID_TIPO_ACCESO'])->on('tipos_acceso');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('generalidades', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_10');
            $table->dropForeign('FK_REFERENCE_11');
        });
    }
}
