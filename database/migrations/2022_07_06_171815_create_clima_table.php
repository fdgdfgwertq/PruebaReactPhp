<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClimaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clima', function (Blueprint $table) {
            $table->integer('ID_CLIMA', true);
            $table->integer('ID_TIPO_CLIMA')->index('FK_REFERENCE_96');
            $table->string('TEMPERATURA', 10);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clima');
    }
}
