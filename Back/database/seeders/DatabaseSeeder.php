<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */

    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@solar.com',
            'password' => bcrypt('secret'),
            'role' => 'admin'
        ]);
        
        TypeProject::create(['name' => 'Techo']);
        TypeProject::create(['name' => 'Fachada']);
    }
}
