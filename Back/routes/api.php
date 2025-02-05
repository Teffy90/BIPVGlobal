<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\QuotationController;

Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::get('/admin/projects', [AdminController::class, 'allProjects']);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('projects', ProjectController::class)
        ->middleware('can:create,App\Models\Project');
});

Route::prefix('auth')->group(function () {
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
         ->middleware('auth:sanctum');
});