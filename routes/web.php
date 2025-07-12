<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
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
Route::get('/actualites', [PostController::class, 'index'])->name('post.index');
Route::get('/actualites/{post}', [PostController::class, 'show'])->name('post.show');

//---------------------------- Teams ----------------------------
Route::get('/equipe-senior/{equipe_id}', fn ($equipe_id) => Inertia::render('Team/Teams', [
    'equipeType' => 'senior',
    'equipe_id' => $equipe_id,
]));
Route::get('/equipe-junior/{equipe_id}', fn ($equipe_id) => Inertia::render('Team/Teams', [
    'equipeType' => 'junior',
    'equipe_id' => $equipe_id,
]));

//---------------------------- Divers ----------------------------
Route::get('/project', fn () => Inertia::render('Divers/Projet'));
Route::get('/history', fn () => Inertia::render('Divers/Historique'));
Route::get('/organisation-chart', fn () => Inertia::render('Divers/Organigramme'));
Route::get('/internal_rules', fn () => Inertia::render('Divers/Reglement'));
Route::get('/statuses', fn () => Inertia::render('Divers/Statuts'));
Route::get('/schedule', fn () => Inertia::render('Divers/Planning'));

Route::get('/tarifs', fn () => Inertia::render('Divers/Tarifs'));
Route::get('/modalites', fn () => Inertia::render('Divers/Modalites'));
Route::get('/modeEmploiLicence', fn () => Inertia::render('Divers/ModeEmploiLicence'));
Route::get('/documentsDivers', fn () => Inertia::render('Divers/DocumentsDivers'));

//---------------------------- Partners ----------------------------
Route::get('/partenaires', fn () => Inertia::render('Partenaires/Partenaires'));
Route::get('/devenez-partenaire', fn () => Inertia::render('Partenaires/DevenezPartenaire'));

//---------------------------- Shop ----------------------------
Route::get('/boutique', fn () => Inertia::render('Boutique/Boutique'));

require __DIR__.'/auth.php';