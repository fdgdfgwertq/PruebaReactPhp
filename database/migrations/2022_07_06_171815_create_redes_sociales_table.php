<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRedesSocialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('redes_sociales', function (Blueprint $table) {
            $table->integer('ID_REDES_SOCIALES', true);
            $table->string('PAGINA_WEB', 50)->default('No aplica');
            $table->string('FACEBOOK', 50)->default('No aplica');
            $table->string('TWITTER', 50)->default('No aplica');
            $table->string('INSTAGRAM', 50)->default('No aplica');
            $table->string('OTRA', 50)->default('No aplica');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('redes_sociales');
    }
}
