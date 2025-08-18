<?php

use App\Http\Controllers\AdminDocumentController;
use Inertia\Inertia;

//---------------------------- Divers ----------------------------
Route::get('/projet', fn () => Inertia::render('Various/Project'));
Route::get('/historique', fn () => Inertia::render('Various/History'));
Route::get('/organigramme', fn () => Inertia::render('Various/OrganisationChart'));
Route::get('/reglement', fn () => Inertia::render('Various/InternalRules'));
Route::get('/statuts', fn () => Inertia::render('Various/Statuses'));
Route::get('/planning', fn () => Inertia::render('Various/Planning'));

//---------------------------- Divers 2 ----------------------------
Route::get('/tarifs', fn () => Inertia::render('Various/Prices'));
Route::get('/modalites', fn () => Inertia::render('Various/Details'));
Route::get('/instructions', fn () => Inertia::render('Various/Instructions'));
Route::get('/documents-divers', fn () => Inertia::render('Various/VariousDocuments'));

// Admin
Route::middleware('auth')->group(function () {
    Route::get('/admin/club', fn () => Inertia::render('Admin/Club/Club', []))->name('admin.club');

    Route::post('/admin/documents/update', [AdminDocumentController::class, 'update'])
        ->name('admin.documents.update');
});

