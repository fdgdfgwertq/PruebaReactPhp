<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPromocionAtractivoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('promocion_atractivo', function (Blueprint $table) {
            $table->foreign(['ID_TIPO_PROMOCION_ATRACTIVO'], 'FK_REFERENCE_23')->references(['ID_TIPO_PROMOCION_ATRACTIVO'])->on('tipo_promocion_atractivo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('promocion_atractivo', function (Blueprint $table) {
            $table->dropForeign('FK_REFERENCE_23');
        });
    }
}
