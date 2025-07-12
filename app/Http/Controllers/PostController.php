<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    // Afficher tous les news
    public function index(): Response
    {
        $posts = Post::latest()->paginate(10);
        $firstPost = Post::latest('created_at')->first();
        $latestPost = Post::latest('created_at')->take(6)->get(); // prend les 6 derniers posts
        $othersPosts = $latestPost->skip(1);

        return Inertia::render('Posts/Actualites', [
            'posts' => $posts ? PostResource::collection($posts) : null,
            'firstPost' => $firstPost ? PostResource::make($firstPost) : null,
            'othersPosts' => $othersPosts ? PostResource::collection($othersPosts) : null
        ]);
        // return response()->json([
        //     'firstPost' => $firstPost ? PostResource::make($firstPost) : null,
        //     'posts' => $posts ? PostResource::collection($posts) : null,
        //     'othersPosts' => $othersPosts ? PostResource::collection($othersPosts) : null
        // ]);
    }
    
    // Afficher un news spécifique
    public function show(Post $post): JsonResponse
    {
        return response()->json($post);
    }


    // Créer une nouvelle news
    public function store(StorePostRequest $request): JsonResponse
    {
        $post = Post::create($request->validated());

        return response()->json([
            'message' => __('post.post_created'),
            'data' => $post
        ], 201);

    }

    // Mettre à jour un news existant
    public function update(UpdatePostRequest $request, Post $post)
    {
        $post->update($request->validated());

        return response()->json([
            'message' => __('post.post_created'),
            'data' => $post
        ]);    
    }

    // Supprimer un news
    public function destroy(Post $post): JsonResponse
    {
        $post->delete();

        return response()->json(['message' => __('post.post_deleted')], 204);
    }
}
