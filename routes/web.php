<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;

//---------------------------- Accueil ----------------------------
Route::get('/', [WelcomeController::class, 'index'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
require __DIR__.'/custom/dashboard.php';
require __DIR__.'/custom/partner.php';
require __DIR__.'/custom/post.php';
require __DIR__.'/custom/shop.php';
require __DIR__.'/custom/team.php';
require __DIR__.'/custom/various.php';
require __DIR__.'/custom/user.php';