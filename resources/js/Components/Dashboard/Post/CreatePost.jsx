import { React, useState, useEffect } from 'react';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm, usePage } from '@inertiajs/react';

export default function CreatePost() {
    const [createActu, setCreateActu] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [errorForm, setErrorForm] = useState(false);
    const [validForm, setValidForm] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        author: '',
        title: '',
        content: '',
        image: null,
    });
    
    const notify = (type) => {
        switch (type) {
            case 'success':
                toast.success("Article créé");
                break;
            case 'error':
                toast.error("Le formulaire contient des erreurs");
                break;
            default:
                break;
        }
    };

    // Toggle sur CreateActu
    const handleCreateActu = () => {
        setCreateActu(prevState => !prevState);
    }

    // Envoi le formulaire au backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (data.author === '' || data.title === '') {
            setErrorForm(true);
            notify('error'); // Affiche la notification d'erreur si le formulaire est invalide
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('author', data.author);
        formDataToSend.append('title', data.title);
        formDataToSend.append('content', data.content);

        if (data.image) {
            formDataToSend.append('image', data.image);
        }

        post(route('post.store'), formDataToSend, {
            forceFormData: true, // 🔑 indique à Inertia d'envoyer en multipart/form-data
            onError: (errors) => {
                notify('error');
            },
        });
    }

    // pour faire apparaitre en direct ce que l'on saisi ou l'image si c'est une image
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setData(name, files[0]);
            setPreviewImage(URL.createObjectURL(files[0]));
        } else {
            setData(name, value);
        }
    };

    // recupère la props du formaulaire pour savoir si success n'est pas null, et dans ce cas referme CreateActu
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            notify('success');
            setErrorForm(false);
            setValidForm(true);

                setTimeout(() => {
                    reset(); // Réinitialise le formulaire
                    setValidForm(false);
                    setPreviewImage(null);
                    setCreateActu(false);
                }, 3000);
        }
    }, [flash.success]);

    return (
        <>
            <div className="create-actu">
                <button className='button-create-actu' onClick={handleCreateActu} >
                    Créer une nouvelle actualité
                </button>
                {createActu && (
                    <div className='block-create-actu flex'>
                        <div className="new-actu">
                            <form onSubmit={handleSubmit}>
                                <div className='input-form'>
                                    <label htmlFor="author">Auteur</label>
                                    <input 
                                        type="text" 
                                        name='author' 
                                        value={data.author}
                                        onChange={handleChange}
                                        placeholder="Nom de l'auteur"
                                    />
                                </div>
                                <div className='input-form'>
                                    <label htmlFor="title">Titre</label>
                                    <input 
                                        type="text" 
                                        name='title' 
                                        value={data.title}
                                        onChange={handleChange}
                                        placeholder="Titre de l'article"
                                    />
                                </div>
                                <div className='input-form'>
                                    <label htmlFor="content">Contenu</label>
                                    <textarea 
                                        rows="3" 
                                        cols="30" 
                                        name='content'
                                        value={data.content}
                                        onChange={handleChange}
                                        placeholder="Entrez votre texte ici...">
                                    </textarea>                            
                                </div>
                                <div className='input-form'>
                                    <label htmlFor="image">Image</label>
                                    <input 
                                        type="file" 
                                        name="image" 
                                        accept="image/*" 
                                        onChange={handleChange}
                                    />
                                </div>
                                {errorForm && (
                                    <div className='message-error-form'>
                                        <p>Un des champs ci-dessus est incomplet ou vide...</p>
                                    </div>
                                )}
                                {validForm && (
                                    <div className='message-valid-form'>
                                        <p>L'article a bien été créé!</p>
                                    </div>
                                    
                                )}
                                <button 
                                    type="submit" 
                                    disabled={processing}
                                    onClick={notify}
                                >
                                    {processing ? 'Envoi en cours...' : 'Créer le post'}
                                </button>
                                <ToastContainer 
                                    position="bottom-right"
                                    autoClose={2900}                                   
                                    theme="light"
                                />
                            </form>
                        </div>
                        <div className="extrait">
                            <h1 className={data.title ? 'with-bar' : ''}>{data.title}</h1>
                            <div className='card-actu'>
                                <h3>Par {data.author} | Le {moment().format('DD/MM/YYYY')}</h3>
                                {previewImage && (
                                    <div className='flex justify-center'>
                                        <img 
                                            src={previewImage} 
                                            alt="Aperçu de l'image" 
                                        />
                                    </div>
                                )}
                                <p className='article-content'>{data.content}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
