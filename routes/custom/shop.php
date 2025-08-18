<?php

use Inertia\Inertia;

Route::get('/boutique', fn () => Inertia::render('Shop/Shop'));

// Admin
Route::middleware('auth')->group(function () {
    Route::get('/admin/boutique', fn () => Inertia::render('Admin/Shop/Shop', []))->name('admin.shop');
});