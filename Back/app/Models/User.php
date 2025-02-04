<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'last_login'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    
  // Agregar cast para last_login
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'last_login' => 'datetime'
        ];
    }

    // Relación con proyectos
    public function projects(): HasMany
    {
        return $this->hasMany(Project::class, 'user_id');
    }

    // Método para actualizar último login
    public function updateLastLogin()
    {
        $this->update(['last_login' => now()]);
        $this->timestamps = false; // Evita que actualice el campo updated_at
        $this->last_login = now();
        $this->save();
        $this->timestamps = true;
    }
}

