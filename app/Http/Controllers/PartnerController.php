<?php

namespace App\Http\Controllers;

use App\Enums\RoleEnum;
use App\Http\Requests\StorePartnerRequest;
use App\Http\Requests\UpdatePartnerRequest;
use App\Http\Resources\PartnerResource;
use App\Models\Partner;
use Inertia\Inertia;
use Inertia\Response;

class PartnerController extends Controller
{
    public function index(): Response
    {
        $partnersInstitutionnels = Partner::query()->where('role', 'institutional partner')->get();
        $partnersHelp = Partner::query()->where('role', 'helped us')->get();
        $partnersPrivate = Partner::query()->where('role', 'private partner')->get();
        
        return Inertia::render('Partner/Partner', [
            'partnersInstitutionnels' => null !== $partnersInstitutionnels ? PartnerResource::collection($partnersInstitutionnels)->resolve() : null,
            'partnersHelp' => null !== $partnersHelp ? PartnerResource::collection($partnersHelp)->resolve() : null,
            'partnersPrivate' => null !== $partnersPrivate ? PartnerResource::collection($partnersPrivate)->resolve() : null,
        ]);
    }

    public function show(Partner $partner)
    {
        //
    }

    public function store(StorePartnerRequest $request)
    {
        $data = $request->validated();
        
        // Gérer le logo
        if ($request->hasFile('logo') && $request->file('logo')->isValid()) {
            $logo = $request->file('logo');
            $timestamp = now()->timestamp;
            $original = pathinfo($logo->getClientOriginalName(), PATHINFO_FILENAME);
            $extension = $logo->getClientOriginalExtension();

            // Nettoyage du nom (facultatif mais conseillé)
            $safeName = Str::slug($original);
            $filename = $timestamp . '-' . $safeName . '.' . $extension;
            
            // Déplacement dans public/assets/Partner
            $logo->move(public_path('assets/Partner'), $filename);
            $data['logo'] = '/assets/Partner/' . $filename;
        }
        
        Partner::create($data);

        return redirect()->route('admin.partner')->with('success', 'Partenaire créé avec succès à ' . now()->format('H:i:s'));  // Ajout de l'heure pour forcer la key a etre differente a chaque appel
    }

    public function update(UpdatePartnerRequest $request, Partner $partner)
    {
        $data = $request->validated();

        $partner->update($data);

        return redirect()->route('admin.partner')->with('updated', 'Partenaire modifié avec succès.');
    }

    public function destroy(Partner $partner)
    {
        $partner->delete();

        return redirect()->route('admin.partner')->with('deleted', 'Partenaire supprimé avec succès.');
    }

    public function admin(): Response
    {
        $partners = Partner::orderBy('created_at','desc')->get();

        return Inertia::render('Admin/Partner/Partner', [
            'partners' => $partners,
        ]);
    }
}
