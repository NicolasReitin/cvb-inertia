<?php

use App\Http\Controllers\UserController;

// Admin
Route::middleware('auth')->group(function () {
    Route::get('/admin/users', [UserController::class, 'index'])->name('admin.users');
    Route::post('/user/store', [UserController::class, 'store'])->name('user.store');
    Route::put('/admin/users/{user}', [UserController::class, 'update'])->name('admin.user.update');
    Route::delete('/admin/users/{user}', [UserController::class, 'destroy'])->name('admin.user.destroy');
});

//---------------------------- User --------------------------------
// Route::middleware(isAdmin::class)->group(function () { // utilisation du middleware sans aliasp
//     Route::post('/user/create', [UserController::class, 'store']);
//     Route::post('/user/update/{user}', [UserController::class, 'update']);
//     Route::delete('/user/{user}', [UserController::class, 'destroy']);
// });