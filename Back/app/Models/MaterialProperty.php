<?php

class MaterialProperty extends Model
{
    protected $primaryKey = 'id_material';
    
    protected $fillable = [
        'efficiency',
        'cost',
        'dimensions',
        'image',
        'project_id'
    ];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}