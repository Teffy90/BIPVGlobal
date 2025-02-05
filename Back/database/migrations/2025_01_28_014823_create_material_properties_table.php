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
        Schema::create('material_properties', function (Blueprint $table) {  
            $table->id('id_material');  
            $table->float('efficiency')->check('efficiency >= 0');  
            $table->decimal('cost', 10, 2)->check('cost >= 0');  
            $table->string('dimensions')->nullable();  
            $table->string('image')->nullable();  

            // Define la clave foránea project_id correctamente
            $table->unsignedBigInteger('project_id');  
            $table->foreign('project_id')->references('project_id')->on('projects')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('material_properties');
    }
};
