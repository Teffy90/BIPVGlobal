<?php

class ProjectProperty extends Model
{
    protected $fillable = [
        'project_id',
        'id_type_project',
        'width',
        'height',
        'inclination',
        'azimuth'
    ];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
