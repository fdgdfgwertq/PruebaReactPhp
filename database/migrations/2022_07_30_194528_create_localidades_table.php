<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocalidadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('localidades', function (Blueprint $table) {
            $table->string('ID_LOCALIDAD', 5);
            $table->string('ID_DEPARTAMENTOS', 2)->index('FK_REFERENCE_80');
            $table->string('LOCALIDAD', 200);

            $table->primary(['ID_LOCALIDAD', 'ID_DEPARTAMENTOS']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('localidades');
    }
}
