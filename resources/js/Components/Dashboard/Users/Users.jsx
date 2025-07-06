import {React, useState, useEffect } from 'react';
import ButtonAddUser from './ButtonAddUser';
import axios from '@/libs/axios';

const Users = () => {
  //recuperation JSON contenant infos du staff
  const [staff, setStaff] = useState([]);
  const [utilisateurId, setUtilisateurId] = useState(''); // Déclarez utilisateurId comme un state
  const [action, setAction] = useState(''); // Action à effectuer : "edit" ou "delete"
  const [formData, setFormData] = useState({ //recuperation des data de utilisateur ciblé
    id :'',
    name: '',
    email: ''
  });

  useEffect(() =>{
    // Fonction asynchrone pour récupérer les staff
    const fetchStaff = async() => {
      try {
        const response = await axios.get('/api/dashboard')
        setStaff(response.data.staff)
              
      } catch (err) {
        console.error(err);
      }
    }
    fetchStaff();
  }, []);

  //EDIT
  const handleEdit = (id, name, email) => {
    setUtilisateurId(id); // recuperer id de l'utilisateur ciblé
    setFormData({
      id: id,
      name: name, //modif nom utilisateur
      email: email //modif email
    });
    setAction('edit'); // Définir l'action sur "edit"
  }

  const updateHandleEdit = (id, name, email) => {
    setUtilisateurId(id); // recuperer id de l'utilisateur ciblé
    setAction('update'); //remettre action par defaut
    //mettre a jour les données du tableau
    const updatedStaff = staff.map((user) => {
      if (user.id !== id) {
        return user
      }
      return {
        ...user,
        name,
        email
      }
    })
    setStaff(updatedStaff)
  }
 
  //DELETE
  const handleDelete = (id, name, email) => {
    setUtilisateurId(id); // recuperer id de l'utilisateur ciblé

    const isConfirmed = window.confirm(`Voulez-vous vraiment supprimer l'utilisateur ${name}?`);
    if (isConfirmed) {
      setAction('delete'); // Définir l'action sur "delete"
    }
    // fonction pour filtrer le user concerner et le supprimer selon l'id selectionné
    const deleteStaff = staff.filter((user) => user.id !== id);
    setStaff(deleteStaff);
  }

  //Cancel
  const handleCancel = () => {
    setAction(''); //remettre action par defaut
  }
  
  useEffect(() => {
    // Envoyez la requête POST une fois que formData est mis à jour
    if ( utilisateurId !== null && action !== null) {
      if (action === 'delete') {
        const fetchDeleteStaff = async() => {
          const response = await axios.delete(`/api/user/${utilisateurId}`, formData)
        }
        fetchDeleteStaff();
      } else if (action === 'update' && formData.name !== '' && formData.email !== '') {
        const fetchUpdateStaff = async() => {
            const response = await axios.post(`/api/user/update/${utilisateurId}`, formData)
          }    
          fetchUpdateStaff(); 
      }
      // Réinitialiser l'état de l'action après l'exécution de la requête POST
    }
  }, [action, staff]);

  const addUserToStaff = (newUser) => {
    setStaff((prevStaff) => [...prevStaff, newUser]);
  };
  
    return (
      <>
      <hr />
        <div className="users" >
          <div className='ml-8 mb-8'>
            <div>
              <ButtonAddUser
                addUserToStaff = {addUserToStaff}
              />
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((utilisateur) => ( 
                <>
                  <tr key={utilisateur.id}>
                    <td>{utilisateur.id}</td>
                    <td>{utilisateur.name}</td>
                    <td>{utilisateur.email}</td>                    
                    <td>
                      <button className='button-edit' onClick={() => handleEdit(utilisateur.id, utilisateur.name, utilisateur.email)}>
                        <img src="/assets/icones/edit-button.png" alt="button edit" />
                      </button>
                    </td>
                    <td>
                      <button className='button-delete' onClick={() => handleDelete(utilisateur.id, utilisateur.name, utilisateur.email)}>
                        <img src="/assets/icones/delete-button.png" alt="button delete" />
                      </button>
                    </td>
                  </tr>
                    {action === "edit" && (
                      <>
                        {utilisateurId === utilisateur.id && (
                          <tr key={utilisateur.id}>
                            <td></td>
                            <td>
                              <div className='flex'>
                                <input 
                                  type="text" 
                                  value={formData.name} 
                                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                              </div>
                            </td>
                            <td>
                              <div className='flex'>
                                <input 
                                  type="text" 
                                  value={formData.email} 
                                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}                                  
                                />
                              </div>
                            </td>
                            <td>
                              <button className='button-cancel' onClick={() => handleCancel()}>
                                <img src="/assets/icones/cancel.png" alt="button cancel" />
                              </button>
                            </td>
                            <td>
                              <button className='button-edit' onClick={() => updateHandleEdit(utilisateur.id, formData.name, formData.email)}>
                                <img src="/assets/icones/valid.png" alt="button check"/>
                              </button>
                            </td>                            
                          </tr>
                        )}
                      </>
                    )}
                </>
              ))}
            </tbody>
          </table>
        </div>  
      </>
  );
};

export default Users;
