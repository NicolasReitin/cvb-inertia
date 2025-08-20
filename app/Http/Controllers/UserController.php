<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('role')
            ->orderBy('created_at', 'desc')
            ->get();
        $roles = Role::all();
        
        return Inertia::render('Admin/User/User', [
            'users' => $users,
            'roles' => $roles,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();

        // $data['password'] = bcrypt($data['password']);

        $user = User::create($data);

        return redirect()->route('admin.users')->with([
            'success' => "L'utilisateur {$user->name} a été créé.",
            'user' => $user, // facultatif si tu veux récupérer directement le user côté React
        ]);
    }

    public function show(User $user)
    {
        //
    }

    public function edit(User $user)
    {
        //
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();

        $user->update($data);

        return redirect()->route('admin.users')->with('updated', 'Utilisateur mis à jour');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('admin.users')->with('deleted', 'Utilisateur supprimé avec succès.');
    }
}
