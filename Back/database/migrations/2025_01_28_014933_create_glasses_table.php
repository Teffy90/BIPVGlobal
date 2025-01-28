<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('glasses', function (Blueprint $table) {
            $table->unsignedBigInteger('id_material'); // Define la columna manualmente
            $table->foreign('id_material') // Define la clave foránea
                  ->references('id_material')
                  ->on('material_properties')
                  ->onDelete('cascade');
            $table->primary('id_material'); // Define la clave primaria
            $table->text('description');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('glasses');
    }
};
