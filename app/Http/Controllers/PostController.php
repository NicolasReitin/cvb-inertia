<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;
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
    public function store(StorePostRequest $request): RedirectResponse
    {
        $data = $request->validated();
        
        // Gérer l'image
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $image = $request->file('image');
            $timestamp = now()->timestamp;
            $original = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
            $extension = $image->getClientOriginalExtension();

            // Nettoyage du nom (facultatif mais conseillé)
            $safeName = Str::slug($original);
            $filename = $timestamp . '-' . $safeName . '.' . $extension;
            
            // Déplacement dans public/assets/posts
            $image->move(public_path('assets/posts'), $filename);
            $data['image'] = '/assets/posts/' . $filename;
        }
        
        $post = Post::create($data);

        return redirect()->route('admin.posts')->with('success', 'Actualité créée avec succès à ' . now()->format('H:i:s'));  // Ajout de l'heure pour forcer la key a etre differente a chaque appel

        // gerer le cas d'erreur : exemple, chamop manquant... ou mauvais caractere...
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
