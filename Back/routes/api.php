<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\QuotationController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\PvWattsController;

/// ruta para accerder al pvwatscontroller
Route::get('/pvwatts', [PvWattsController::class, 'getPvWattsData']);

// Rutas públicas (sin autenticación)
Route::prefix('auth')->group(function () {
    Route::post('login', [AuthenticatedSessionController::class, 'store'])->name('login');
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
    Route::post('register', [RegisteredUserController::class, 'store'])->name('register');
});

// Rutas protegidas por autenticación (Sanctum)
Route::middleware(['auth:sanctum'])->group(function () {
    // Rutas de proyectos
    Route::prefix('projects')->group(function () {
        Route::get('/', [ProjectController::class, 'index'])->name('projects.index');
        Route::post('/', [ProjectController::class, 'store'])->name('projects.store');
        Route::get('/{project}', [ProjectController::class, 'show'])->name('projects.show');
        Route::put('/{project}', [ProjectController::class, 'update'])->name('projects.update');
        Route::delete('/{project}', [ProjectController::class, 'destroy'])->name('projects.destroy');
    });

    // Rutas de cotizaciones
    Route::prefix('quotations')->group(function () {
        Route::get('/', [QuotationController::class, 'index'])->name('quotations.index');
        Route::post('/', [QuotationController::class, 'store'])->name('quotations.store');
        Route::get('/{quotation}', [QuotationController::class, 'show'])->name('quotations.show');
        Route::put('/{quotation}', [QuotationController::class, 'update'])->name('quotations.update');
        Route::delete('/{quotation}', [QuotationController::class, 'destroy'])->name('quotations.destroy');
    });

    // Rutas de administración (solo para administradores)
    Route::middleware(['role:admin'])->group(function () {
        Route::get('/admin/projects', [ProjectController::class, 'allProjects'])->name('admin.projects.index');
    });
   
});

      // Rutas de restablecimiento de contraseña
      Route::get('forgot-password', [ForgotPasswordController::class, 'showLinkRequestForm'])->name('password.request');
      Route::post('forgot-password', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
      Route::get('reset-password/{token}', [ResetPasswordController::class, 'showResetForm'])->name('password.reset');
      Route::post('reset-password', [ResetPasswordController::class, 'reset'])->name('password.update');