<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    protected $primaryKey = 'project_id';
    
    protected $fillable = [
        'user_id', 
        'title',
        'efficiency',
        'project_cost',
        'system_capacity'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
// Relación con propiedades del proyecto
public function properties(): HasMany
{
    return $this->hasMany(ProjectProperty::class, 'project_id');
}

// Nueva relación con tipo de proyecto
public function typeProject(): BelongsTo
{
    return $this->belongsTo(TypeProject::class, 'id_type_project');
}


    public function materials(): HasMany
    {
        return $this->hasMany(MaterialProperty::class);
    }
}



    