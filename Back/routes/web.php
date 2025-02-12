<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\QuotationController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Password;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
/*
|--------------------------------------------------------------------------
| Rutas Públicas
|--------------------------------------------------------------------------
*/

// Página de inicio
Route::get('/', function () {
    return view('welcome');
})->name('welcome');

/*
|--------------------------------------------------------------------------
| Rutas de Autenticación
|--------------------------------------------------------------------------
*/

// Rutas de autenticación (login, registro, restablecimiento de contraseña)
Auth::routes(['verify' => true]); // 'verify' => true habilita la verificación de email

/*
|--------------------------------------------------------------------------
| Rutas Protegidas por Autenticación
|--------------------------------------------------------------------------
*/

Route::middleware(['auth'])->group(function () {
    // Dashboard principal
    Route::get('/home', [HomeController::class, 'index'])->name('home');

    // Cierre de sesión personalizado
    Route::post('/logout', function () {
        auth()->logout();
        return redirect()->route('welcome');
    })->name('custom.logout');

    /*
    |--------------------------------------------------------------------------
    | Rutas de Proyectos
    |--------------------------------------------------------------------------
    */
    Route::prefix('projects')->group(function () {
        Route::get('/', [ProjectController::class, 'index'])->name('projects.index');
        Route::get('/create', [ProjectController::class, 'create'])->name('projects.create');
        Route::post('/', [ProjectController::class, 'store'])->name('projects.store');
        Route::get('/{project}', [ProjectController::class, 'show'])->name('projects.show');
        Route::get('/{project}/edit', [ProjectController::class, 'edit'])->name('projects.edit');
        Route::put('/{project}', [ProjectController::class, 'update'])->name('projects.update');
        Route::delete('/{project}', [ProjectController::class, 'destroy'])->name('projects.destroy');
    });

    /*
    |--------------------------------------------------------------------------
    | Rutas de Cotizaciones
    |--------------------------------------------------------------------------
    */
    Route::prefix('quotations')->group(function () {
        Route::get('/', [QuotationController::class, 'index'])->name('quotations.index');
        Route::get('/create', [QuotationController::class, 'create'])->name('quotations.create');
        Route::post('/', [QuotationController::class, 'store'])->name('quotations.store');
        Route::get('/{quotation}', [QuotationController::class, 'show'])->name('quotations.show');
        Route::get('/{quotation}/edit', [QuotationController::class, 'edit'])->name('quotations.edit');
        Route::put('/{quotation}', [QuotationController::class, 'update'])->name('quotations.update');
        Route::delete('/{quotation}', [QuotationController::class, 'destroy'])->name('quotations.destroy');
    });

    /*
    |--------------------------------------------------------------------------
    | Rutas de Administración (Solo para administradores)
    |--------------------------------------------------------------------------
    */
    Route::middleware(['is_admin'])->group(function () {
        // Gestión de Usuarios
        Route::resource('users', UserController::class)->except(['show']);
    });
});

/*
|--------------------------------------------------------------------------
| Rutas de Fallback (404)
|--------------------------------------------------------------------------
*/

Route::fallback(function () {
    return abort(404, 'Página no encontrada');
});

// Rutas de restablecimiento de contraseña
Route::get('forgot-password', [ForgotPasswordController::class, 'showLinkRequestForm'])->name('password.request');
Route::post('forgot-password', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
Route::get('reset-password/{token}', [ResetPasswordController::class, 'showResetForm'])->name('password.reset');
Route::post('reset-password', [ResetPasswordController::class, 'reset'])->name('password.update');
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
