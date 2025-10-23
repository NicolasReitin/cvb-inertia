<?php

use App\Http\Controllers\TeamController;
use Inertia\Inertia;

Route::get('/equipe/{team}', [TeamController::class, 'show'])->name('team.show');

// Admin
Route::middleware('auth')->group(function () {
    // Team
    Route::get('/admin/equipes', [TeamController::class, 'admin'])->name('admin.team');

    // Player
    
});