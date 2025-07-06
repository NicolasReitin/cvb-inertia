import {React, useEffect, useState} from 'react'
import axios from '@/libs/axios';


export default function ButtonAddUser( {addUserToStaff}) {
    const [createUser, setCreateUser] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleAddUser = () => {
        setCreateUser(true)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await axios.post('/api/user/create', formData);
            if (response.status ===201){
                // console.log('User created:', response.data);
                alert(`L'utilisateur ${formData.name} a bien été créé`);
                console.log(response.data);
                addUserToStaff(response.data.user);
                
            }
        } catch (error) {
            console.error('Error creating user:', error);
            alert('Une erreur est survenue lors de la création de l\'utilisateur.');
        }
        setCreateUser(false)
    }


  return (
    <>
        <button className='button-add-user' onClick={() => handleAddUser()}>
            Créer un nouvel utilisateur
        </button>
        {createUser && (
            <>
                <form onSubmit={handleSubmit} className='flex gap-6 mt-8 mb-8'>
                    <div className='flex items-center gap-2'>
                        <label htmlFor="">Nom</label>
                        <input type="text" name='name' value={formData.name} onChange={handleChange}/>
                    </div>
                    <div className='flex items-center gap-2'>
                        <label htmlFor="">Email</label>
                        <input type='email' name='email' value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className='flex items-center gap-2'>
                        <label htmlFor="">Mot de passe</label>
                        <input type="password" name='password' value={formData.password} onChange={handleChange}/>
                    </div>
                    <button type='submit' className='button-add-user'>
                        Valider
                    </button>
                </form>
            </>
        )}
    </>
  )
}
