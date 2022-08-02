<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePromocionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promocion', function (Blueprint $table) {
            $table->integer('ID_PROMOCION', true);
            $table->string('FOLLETOS_GUIAS', 300)->nullable();
            $table->string('PUBLICACIONES', 300)->nullable();
            $table->string('TRIPADVISOR', 300)->nullable();
            $table->string('CTRAVEL', 300)->nullable();
            $table->string('GOOGLEM', 300)->nullable();
            $table->string('PAGINA_WEB', 300)->nullable();
            $table->string('YOUTUBE', 300)->nullable();
            $table->string('OTROS', 300)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('promocion');
    }
}
