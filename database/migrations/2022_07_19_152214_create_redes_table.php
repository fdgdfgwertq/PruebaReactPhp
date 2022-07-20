<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRedesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('redes', function (Blueprint $table) {
            $table->integer('ID_RED_SOCIAL', true);
            $table->string('PAGINA_WEB', 50)->nullable()->default('No aplica');
            $table->string('FACEBOOK', 50)->nullable()->default('No aplica');
            $table->string('TWITTER', 50)->nullable()->default('No aplica');
            $table->string('INSTAGRAM', 50)->nullable()->default('No aplica');
            $table->string('OTRA', 50)->nullable()->default('No aplica');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('redes');
    }
}
