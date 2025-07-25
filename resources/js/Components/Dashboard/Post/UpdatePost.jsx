import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function UpdatePost({ post, onCancel, notify }) {
    const [form, setForm] = useState({
        title: post.title || '',
        author: post.author || '',
        content: post.content || '',
        image: post.image || '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        router.put(route('post.update', post.id), form, {
            onSuccess: () => {
                notify('updated')
                onCancel()
                setLoading(false);
            },
            onError: (errors) => {
                notify('update-error')
                console.error(errors);
                setLoading(false);
            },
        });
    };

    return (
        <tr className="bg-yellow-100">
            <td colSpan="6" className="p-4 border border-gray-300">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <label htmlFor="title">Titre</label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="input"
                            placeholder="Titre"
                        />
                        <label htmlFor="author">Auteur</label>
                        <input
                            type="text"
                            name="author"
                            value={form.author}
                            onChange={handleChange}
                            className="input"
                            placeholder="Auteur"
                        />
                    </div>
                    <label htmlFor="content">Contenu</label>
                    <textarea
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                        className="input"
                        placeholder="Contenu"
                        rows={3}
                    />
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
