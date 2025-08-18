<?php

use App\Http\Controllers\PartnerController;
use Inertia\Inertia;

Route::get('/partenaires', [PartnerController::class, 'index'])->name('partners.index');
Route::get('/devenez-partenaire', fn () => Inertia::render('Partner/BecomePartner'));

// Admin
Route::middleware('auth')->group(function () {
    Route::get('/admin/partenaires', [PartnerController::class, 'admin'])->name('admin.partner');
    Route::post('/admin/partner/create', [PartnerController::class, 'store'])->name('partner.store');
    Route::put('/admin/partner/update/{partner}', [PartnerController::class, 'update'])->name('partner.update');
    Route::delete('/admin/partner/delete/{partner}', [PartnerController::class, 'destroy'])->name('partner.destroy');
});