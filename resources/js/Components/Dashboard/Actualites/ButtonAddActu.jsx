import { React, useState } from 'react';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '@/libs/axios';

export default function ButtonAddActu({ addActualite }) {
    const [createActu, setCreateActu] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [formData, setFormData] = useState({
        author: '',
        title: '',
        content: '',
        image: null
        });
    const [errorForm, setErrorForm] = useState(false);
    const [validForm, setValidForm] = useState(false);
    
    const notify = (type) => {
        switch (type) {
            case 'success':
                toast.success("Actualité créée");
                break;
            case 'error':
                toast.error("Le formulaire contient des erreurs");
                break;
            default:
                break;
        }
    };

    const handleCreateActu = () => {
        setCreateActu(prevState => !prevState);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.author === '' || formData.title === '') {
            setErrorForm(true);
            notify('error'); // Affiche la notification d'erreur si le formulaire est invalide
        } else {
            try {
                const formDataToSend = new FormData();
                formDataToSend.append('author', formData.author);
                formDataToSend.append('title', formData.title);
                formDataToSend.append('content', formData.content);
                formDataToSend.append('image', formData.image);

                const response = await axios.post(`/api/actualite/create`, formDataToSend);
                if (response.status === 201){
                    const newActu = response.data.actualite;

                    addActualite(newActu);

                    setErrorForm(false);
                    setValidForm(true);

                    notify('success'); // Affiche la notification de succès si le formulaire est valide
                    
                    setTimeout(() => {
                        setFormData({
                            author: '',
                            title: '',
                            content: '',
                            image: null
                        });
                        setValidForm(false);
                        setPreviewImage(null);
                        setCreateActu(false);
                    }, 3000);
                }
            } catch (error) {
                console.error("Erreur lors de l'envoi des données :", error.message);
            }
        }
    }

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            const imageUrl = URL.createObjectURL(files[0]);
            setFormData({
                ...formData,
                [name]: files[0]
            });
            setPreviewImage(imageUrl);
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

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
                                        value={formData.author}
                                        onChange={handleChange}
                                        placeholder="Nom de l'auteur"
                                    />
                                </div>
                                <div className='input-form'>
                                    <label htmlFor="title">Titre</label>
                                    <input 
                                        type="text" 
                                        name='title' 
                                        value={formData.title}
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
                                        value={formData.content}
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
                                <button type="submit" onClick={notify}>
                                    Valider
                                </button>
                                <ToastContainer 
                                    position="bottom-right"
                                    autoClose={2900}                                   
                                    theme="light"
                                />
                            </form>
                        </div>
                        <div className="extrait">
                            <h1 className={formData.title ? 'with-bar' : ''}>{formData.title}</h1>
                            <div className='card-actu'>
                                <h3>Par {formData.author} | Le {moment().format('DD/MM/YYYY')}</h3>
                                {previewImage && (
                                    <div className='flex justify-center'>
                                        <img 
                                            src={previewImage} 
                                            alt="Aperçu de l'image" 
                                        />
                                    </div>
                                )}
                                <p className='article-content'>{formData.content}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
