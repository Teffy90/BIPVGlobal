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
        Schema::create('projects', function (Blueprint $table) {  
            $table->id('project_id');  
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');  
            $table->string('title', 255);  
            $table->timestamp('created_at')->useCurrent();  
            $table->float('efficiency')->check('efficiency >= 0');  
            $table->decimal('project_cost', 10, 2)->check('project_cost >= 0');  
            $table->float('system_capacity')->check('system_capacity >= 0');  
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
