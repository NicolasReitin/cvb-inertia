<?php

use App\Http\Controllers\UserController;
use Inertia\Inertia;

// Admin
Route::middleware('auth')->group(function () {
    Route::get('/admin/utilisateurs', fn () => Inertia::render('Admin/User/User', []))->name('admin.user');
    Route::get('/admin/users', [UserController::class, 'index'])->name('admin.user');
});

//---------------------------- User --------------------------------
// Route::middleware(isAdmin::class)->group(function () { // utilisation du middleware sans aliasp
//     Route::post('/user/create', [UserController::class, 'store']);
//     Route::post('/user/update/{user}', [UserController::class, 'update']);
//     Route::delete('/user/{user}', [UserController::class, 'destroy']);
// });