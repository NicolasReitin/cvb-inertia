<?php

namespace App\Http\Controllers;

use App\Http\Resources\PartnerResource;
use App\Http\Resources\PostResource;
use App\Models\Partner;
use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function index(): Response
    {
        $latestPosts = Post::latest('created_at')->take(6)->get();
        $firstPost = $latestPosts->first();
        $othersPosts = $latestPosts->skip(1);

        $partners = Partner::all();

        return Inertia::render('Welcome', [
            'firstPost' => $firstPost ? PostResource::make($firstPost)->resolve() : null,
            'othersPosts' => $othersPosts ? PostResource::collection($othersPosts)->resolve() : null,
            'partners' => $partners ? PartnerResource::collection($partners)->resolve() : null,
        ]);
    }
}
