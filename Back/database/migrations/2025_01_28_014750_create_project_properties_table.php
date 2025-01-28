<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('project_properties', function (Blueprint $table) {
            // Definir las columnas 'project_id' y 'id_type_project' como unsignedBigInteger
            $table->unsignedBigInteger('project_id');
            $table->unsignedBigInteger('id_type_project');

            // Definir las claves foráneas después de las columnas
            $table->foreign('project_id')->references('project_id')->on('projects')->onDelete('cascade');
            $table->foreign('id_type_project')->references('id')->on('type_projects')->onDelete('cascade');

            // Otras columnas
            $table->float('width')->check('width >= 0');
            $table->float('height')->check('height >= 0');
            $table->float('inclination')->check('inclination >= 0');
            $table->float('azimuth')->check('azimuth >= 0');

            // Definir la clave primaria compuesta
            $table->primary(['project_id', 'id_type_project']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('project_properties');
    }
};
