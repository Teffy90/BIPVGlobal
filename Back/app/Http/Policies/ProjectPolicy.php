<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Project;

class ProjectPolicy
{
    public function view(User $user, Project $project): bool
    {
        return $user->role === 'admin' || $user->id === $project->user_id;
    }

    public function create(User $user): bool
    {
        return in_array($user->role, ['admin', 'technical']);
    }

    
}