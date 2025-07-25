<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\WelcomeController;
use App\Models\Post;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//---------------------------- Accueil ----------------------------
Route::get('/', [WelcomeController::class, 'index'])->name('home');

//---------------------------- Admin / Auth ----------------------------
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth'])->name('dashboard');
// Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(isAdmin::class);

Route::middleware('auth')->group(function () {
    Route::get('/admin/actualites', fn () => Inertia::render('Admin/Post/Post', [
        'posts' => Post::orderBy('created_at', 'desc')->get()
    ]))->name('admin.posts');

    Route::get('/admin/club', fn () => Inertia::render('Admin/Club/Club', []))->name('admin.club');
    Route::get('/admin/equipes', fn () => Inertia::render('Admin/Team/Team', []))->name('admin.team');
    Route::get('/admin/partenaires', fn () => Inertia::render('Admin/Partner/Partner', []))->name('admin.partner');
    Route::get('/admin/boutique', fn () => Inertia::render('Admin/Shop/Shop', []))->name('admin.shop');
    Route::get('/admin/utilisateurs', fn () => Inertia::render('Admin/User/User', []))->name('admin.user');
});


//---------------------------- User --------------------------------
// Route::middleware(isAdmin::class)->group(function () { // utilisation du middleware sans aliasp
//     Route::post('/user/create', [UserController::class, 'store']);
//     Route::post('/user/update/{user}', [UserController::class, 'update']);
//     Route::delete('/user/{user}', [UserController::class, 'destroy']);
// });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//---------------------------- Posts ----------------------------
Route::get('/actualites', [PostController::class, 'index'])->name('post.index');
Route::get('/actualites/{post}', [PostController::class, 'show'])->name('post.show');
Route::post('/admin/post/create', [PostController::class, 'store'])->name('post.store');
Route::put('/admin/post/update/{post}', [PostController::class, 'update'])->name('post.update');
Route::delete('/admin/post/delete/{post}', [PostController::class, 'destroy'])->name('post.destroy');

//---------------------------- Teams ----------------------------
Route::get('/equipe/{team}', [TeamController::class, 'show'])->name('team.show');

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

//---------------------------- Partners ----------------------------
Route::get('/partenaires', [PartnerController::class, 'index'])->name('partners.index');
Route::get('/devenez-partenaire', fn () => Inertia::render('Partners/BecomePartner'));

//---------------------------- Shop ----------------------------
Route::get('/boutique', fn () => Inertia::render('Shop/Shop'));

require __DIR__.'/auth.php';