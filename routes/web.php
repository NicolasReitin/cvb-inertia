<?php

use App\Http\Controllers\PartnerController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\WelcomeController;
use App\Models\Team;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//---------------------------- Accueil ----------------------------
// Route::get('/', fn () => Inertia::render('Welcome'));
Route::get('/', [WelcomeController::class, 'index']);

//---------------------------- Admin / Auth ----------------------------
Route::get('/cvb-admin', fn () => Inertia::render('Auth/Login'));
Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//---------------------------- Posts ----------------------------
Route::get('/actualites', [PostController::class, 'index'])->name('posts.index');
Route::get('/actualites/{post}', [PostController::class, 'show'])->name('posts.show');

//---------------------------- Teams ----------------------------
// Route::get('/equipe/{team}', function (Team $team) {
//     return Inertia::render('Team/Teams', [
//         'team' => $team,
//     ]);
// })->name('team.show');

Route::get('/equipe/{team}', [TeamController::class, 'show'])
     ->name('team.show');

//---------------------------- Divers ----------------------------
Route::get('/projet', fn () => Inertia::render('Various/Project'));
Route::get('/historique', fn () => Inertia::render('Various/History'));
Route::get('/organigramme', fn () => Inertia::render('Various/OrganisationChart'));
Route::get('/reglement', fn () => Inertia::render('Various/InternalRules'));
Route::get('/statuts', fn () => Inertia::render('Various/Statuses'));
Route::get('/planning', fn () => Inertia::render('Various/Planning'));

Route::get('/tarifs', fn () => Inertia::render('Various/Prices'));
Route::get('/modalites', fn () => Inertia::render('Various/Details'));
Route::get('/instructions', fn () => Inertia::render('Various/Instructions'));
Route::get('/documents-divers', fn () => Inertia::render('Various/VariousDocuments'));

//---------------------------- Partners ----------------------------
Route::get('/partenaires', [PartnerController::class, 'index'])->name('partners.index');
Route::get('/devenez-partenaire', fn () => Inertia::render('Partners/BecomePartner'));

//---------------------------- Shop ----------------------------
Route::get('/boutique', fn () => Inertia::render('Shop/Shop'));

require __DIR__.'/auth.php';