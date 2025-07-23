<?php

namespace App\Http\Controllers;

use App\Http\Resources\PartnerResource;
use App\Http\Resources\PlayerResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\TeamResource;
use App\Http\Resources\UserResource;
use App\Models\Partner;
use App\Models\Player;
use App\Models\Post;
use App\Models\Team;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $staff = User::all();
        $players = Player::all();
        $posts = Post::orderBy('created_at', 'asc')->get();
        $teams = Team::all();
        $partners = Partner::all();

        return Inertia::render('Admin/Dashboard', [
            'staff' => UserResource::collection($staff)->resolve(),
            'players' => PlayerResource::collection($players)->resolve(),
            'posts' => PostResource::collection($posts)->resolve(),
            'teams' => TeamResource::collection($teams)->resolve(),
            'partners' => PartnerResource::collection($partners)->resolve(),
        ]);
    }
}
