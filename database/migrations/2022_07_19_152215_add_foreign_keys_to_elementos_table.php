<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToElementosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('elementos', function (Blueprint $table) {
            $table->foreign(['ID_COMPONENTE', 'ID_GRUPO', 'ID_TIPO_PATRIMONIO'], 'FK_REFERENCE_21')->references(['ID_COMPONENTE', 'ID_GRUPO', 'ID_TIPO_PATRIMONIO'])->on('componentes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('elementos', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_21');
        });
    }
}
