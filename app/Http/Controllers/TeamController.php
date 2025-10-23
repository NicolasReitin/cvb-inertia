<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use App\Models\Team;
use Inertia\Inertia;
use Inertia\Response;

class TeamController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(StoreTeamRequest $request)
    {
        //
    }

    public function show(Team $team)
    {
        $team->load('players'); // Eager loading de la relation

        return Inertia::render('Team/Teams', [
            'team' => $team,
        ]);
    }

    public function edit(Team $team)
    {
        //
    }

    public function update(UpdateTeamRequest $request, Team $team)
    {
        //
    }

    public function destroy(Team $team)
    {
        //
    }

    public function admin(): Response
    {
        $teams = Team::all();

        return Inertia::render('Admin/Team/Team', [
            'teams' => $teams,
        ]);
    }
}
