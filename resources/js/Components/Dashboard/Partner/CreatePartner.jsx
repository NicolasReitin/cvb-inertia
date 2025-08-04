import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { router, useForm, usePage } from '@inertiajs/react';

export default function CreatePartner({ notify }) {
    const [createPartner, setCreatePartner] = useState(false);
    const [errorForm, setErrorForm] = useState(false);
    const [validForm, setValidForm] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        url: '',
        role: '',
        logo: null,
    });

    // Toggle sur createPartner
    const handleCreatePartner = () => {
        setCreatePartner(prevState => !prevState);
    }

    // Envoi le formulaire au backend
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (data.name === '') {
            setErrorForm(true);
            notify('form-error'); // Affiche la notification d'erreur si le formulaire est invalide
            return;
        }

        router.post(route('partner.store'), data, {
            forceFormData: true, // 🔑 indique à Inertia d'envoyer en multipart/form-data
            onError: (errors) => {
                console.log('Erreurs Laravel:', errors);
                notify('form-error');
            },
        });
    }

    // recupère la props du formaulaire pour savoir si success n'est pas null, et dans ce cas referme createPartner
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            notify('success');
            setErrorForm(false);
            setValidForm(true);

                setTimeout(() => {
                    reset(); // Réinitialise le formulaire
                    setValidForm(false);
                    setCreatePartner(false);
                }, 3000);
        }
    }, [flash.success]);

    return (
        <>
            <div className="create-actu">
                <button className='button-create-actu' onClick={handleCreatePartner} >
                    Créer un nouveau partenaire
                </button>
                {createPartner && (
                    <div className='block-create-actu flex'>
                        <div className="new-actu">
                            <form onSubmit={handleSubmit}>
                                <div className='input-form'>
                                    <label htmlFor="name">Nom</label>
                                    <input 
                                        type="text" 
                                        name='name' 
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Nom du partenaire"
                                    />
                                </div>
                                <div className='input-form'>
                                    <label htmlFor="url">Url</label>
                                    <input 
                                        type="text" 
                                        name='url' 
                                        value={data.url}
                                        placeholder="Url du site du partenaire"
                                        onChange={(e) => setData('url', e.target.value)}
                                    />
                                </div>
                                <div className="input-form">
                                    <label htmlFor="role">Rôle</label>
                                    <select
                                        name="role"
                                        value={data.role}
                                        onChange={(e) => setData('role', e.target.value)}
                                        className="input w-96"
                                    >
                                        <option value="">-- Sélectionner un rôle --</option>
                                        <option value="institutional partner">Partenaires institutionnels</option>
                                        <option value="private partner">Partenaires privés</option>
                                        <option value="helped us">Nous ont aidés</option>
                                    </select>
                                </div>
                                <div className='input-form'>
                                    <label htmlFor="logo">Logo</label>
                                    <input 
                                        type="file" 
                                        name="logo" 
                                        accept="image/*"
                                        onChange={(e) => setData('logo', e.target.files[0])} 
                                    />
                                </div>
                                {errorForm && (
                                    <div className='message-error-form'>
                                        <p>Un des champs ci-dessus est incomplet ou vide...</p>
                                    </div>
                                )}
                                {validForm && (
                                    <div className='message-valid-form'>
                                        <p>Le partenaire a bien été créé!</p>
                                    </div>
                                    
                                )}
                                <button 
                                    type="submit" 
                                    disabled={processing}
                                    onClick={notify}
                                >
                                    {processing ? 'Envoi en cours...' : 'Créer le partenaire'}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
