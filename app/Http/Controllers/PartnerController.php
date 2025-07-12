<?php

namespace App\Http\Controllers;

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
        
        return Inertia::render('Partners/Partners', [
            'partnersInstitutionnels' => null !== $partnersInstitutionnels ? PartnerResource::collection($partnersInstitutionnels)->resolve() : null,
            'partnersHelp' => null !== $partnersHelp ? PartnerResource::collection($partnersHelp)->resolve() : null,
            'partnersPrivate' => null !== $partnersPrivate ? PartnerResource::collection($partnersPrivate)->resolve() : null,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StorePartnerRequest $request)
    {
        //
    }

    public function show(Partner $partner)
    {
        //
    }

    public function edit(Partner $partner)
    {
        //
    }

    public function update(UpdatePartnerRequest $request, Partner $partner)
    {
        //
    }

    public function destroy(Partner $partner)
    {
        //
    }
}
