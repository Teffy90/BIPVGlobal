<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TypeProject extends Model
{
    protected $table = 'type_projects';
    protected $primaryKey = 'id';
    
    public function projects(): HasMany
    {
        return $this->hasMany(Project::class, 'id_type_project');
    }
}