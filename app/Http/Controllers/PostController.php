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
        $posts = Post::latest()->paginate(9);

        // on garde le paginator et on transforme chaque item avec through()
        $postsTransformed = $posts->through(fn ($post) => new PostResource($post));

        return Inertia::render('Post/Post', [
            'posts' => $postsTransformed,
        ]);
    }
    
    // Afficher un post spécifique
    public function show(Post $post): Response
    {
        return Inertia::render('Post/Show', [
            'post' => null !== $post ? PostResource::make( $post )->resolve() : null,
        ]);
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
