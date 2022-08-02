<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUpdateRecordTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('update_record', function (Blueprint $table) {
            $table->integer('ID_UPDATE')->primary();
            $table->string('TOKEN', 200);
            $table->integer('TABLA');
            $table->integer('REGISTRO');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('update_record');
    }
}
