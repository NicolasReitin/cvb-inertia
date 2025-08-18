<?php

use App\Http\Controllers\TeamController;
use Inertia\Inertia;

Route::get('/equipe/{team}', [TeamController::class, 'show'])->name('team.show');

// Admin
Route::middleware('auth')->group(function () {
    Route::get('/admin/equipes', fn () => Inertia::render('Admin/Team/Team', []))->name('admin.team');
});