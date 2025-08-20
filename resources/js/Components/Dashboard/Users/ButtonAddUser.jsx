import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';

export default function ButtonAddUser({ roles, addUserToStaff, notify }) {
    const [createUser, setCreateUser] = useState(false);
console.log(usePage());

    // useForm d’Inertia
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        email: '',
        password: '',
        role_id: '',
    });

    const handleAddUser = () => {
        setCreateUser(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('user.store'), {
            onSuccess: (page) => {
                notify(success)
                alert(`L'utilisateur ${data.name} a bien été créé`);
                addUserToStaff(page.props.user); // si tu renvoies le user depuis ton contrôleur
                reset();
                setCreateUser(false);
            },
            onError: () => {
                alert("Une erreur est survenue lors de la création de l'utilisateur.");
            },
        });
    };

    return (
        <>
            <button className="button-add-user" onClick={handleAddUser}>
                Créer un nouvel utilisateur
            </button>

            {createUser && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8 mb-8">
                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="border rounded p-2"
                            />
                            {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="border rounded p-2"
                            />
                            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="password">Mot de passe</label>
                            <input
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="border rounded p-2"
                            />
                            {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="role_id">Rôle</label>
                            <select
                                id="role_id"
                                name="role_id"
                                value={data.role_id}
                                onChange={e => setData('role_id', e.target.value)}
                                className="border rounded p-2"
                            >
                                <option value="">-- Sélectionner un rôle --</option>
                                {roles.map(role => (
                                    <option key={role.id} value={role.id}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                            {errors.role_id && <span className="text-red-500">{errors.role_id}</span>}
                        </div>
                    </div>

                    <div>
                        <button 
                            type="submit" 
                            className="button-add-user" 
                            disabled={processing}
                        >
                            {processing ? 'Création...' : 'Valider'}
                        </button>
                    </div>
                </form>
            )}
        </>
    );
}
