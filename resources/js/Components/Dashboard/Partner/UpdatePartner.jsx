import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';

export default function UpdatePartner({ partner, onCancel, notify }) {
    const [form, setForm] = useState({
        name: partner.name || '',
        url: partner.url || '',
        role: partner.role || '',
        logo: partner.logo || '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        router.put(route('partner.update', partner.id), form, {
            onSuccess: () => {
                notify('updated')
                onCancel()
                setLoading(false);
            },
            onError: (errors) => {
                notify('update-error')
                setLoading(false);
            },
        });
    };

    return (
        <tr className="bg-yellow-100">
            <td colSpan="6" className="p-4 border border-gray-300">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className="flex gap-12">
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="input"
                            placeholder="Titre"
                        />
                        <label htmlFor="url">Url</label>
                        <input
                            type="text"
                            name="url"
                            value={form.url}
                            onChange={handleChange}
                            className="input"
                            placeholder="Auteur"
                        />
                    <label htmlFor="role">Role</label>
                    <select
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className="input w-96"
                    >
                        <option value="institutional partner">Partenaires institutionnels</option>
                        <option value="private partner">Partenaires privés</option>
                        <option value="helped us">Nous ont aidés</option>
                    </select>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            className="bg-gray-300 text-black px-4 py-2 rounded"
                            onClick={onCancel} // Ou un `onClose()` si géré par parent
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-yellow-500 text-white px-4 py-2 rounded"
                        >
                            {loading ? 'En cours…' : 'Modifier'}
                        </button>
                    </div>
                </form>
            </td>
        </tr>
    );
}
