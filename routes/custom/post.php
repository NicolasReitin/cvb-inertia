<?php

use App\Http\Controllers\PostController;

Route::get('/actualites', [PostController::class, 'index'])->name('post.index');
Route::get('/actualites/{post}', [PostController::class, 'show'])->name('post.show');

// Admin
Route::middleware('auth')->group(function () {
    Route::get('/admin/actualites', [PostController::class, 'admin'])->name('admin.post');
    Route::post('/admin/post/create', [PostController::class, 'store'])->name('post.store');
    Route::put('/admin/post/update/{post}', [PostController::class, 'update'])->name('post.update');
    Route::delete('/admin/post/delete/{post}', [PostController::class, 'destroy'])->name('post.destroy');
});