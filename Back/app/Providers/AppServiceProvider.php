<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
    
    protected $listen = [
        'Illuminate\Auth\Events\Login' => [
            'App\Listeners\UpdateLastLogin',
        ],
    ];

    public function handle(Login $event)
{
    $event->user->updateLastLogin();
}
}
