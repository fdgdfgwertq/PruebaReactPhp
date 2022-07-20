<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMunicipiosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('municipios', function (Blueprint $table) {
            $table->string('ID_MUNICIPIOS', 3);
            $table->string('ID_DEPARTAMENTOS', 2)->index('FK_REFERENCE_8');
            $table->string('MUNICIPIO', 200);

            $table->primary(['ID_MUNICIPIOS', 'ID_DEPARTAMENTOS']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('municipios');
    }
}
