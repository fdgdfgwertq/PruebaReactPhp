<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToLocalidadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('localidades', function (Blueprint $table) {
            $table->foreign(['ID_DEPARTAMENTOS'], 'FK_REFERENCE_80')->references(['ID_DEPARTAMENTOS'])->on('departamentos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('localidades', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_80');
        });
    }
}
