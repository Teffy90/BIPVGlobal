<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('type_projects', function (Blueprint $table) {
            $table->id('id');  // El nombre de la columna debe ser 'id' para la clave primaria
            $table->string('name', 100);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('type_projects');
    }
};
