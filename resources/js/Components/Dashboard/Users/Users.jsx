import React, { useState } from 'react';
import ButtonAddUser from './ButtonAddUser';
import { useForm, usePage } from '@inertiajs/react';

const Users = ({notify}) => {
  const { users } = usePage().props;
  const { roles } = usePage().props;
  const [editId, setEditId] = useState(null);
  const form = useForm({ name: '', email: '', role_id: ''});

  //EDIT
  const handleEdit = (user) => {
    setEditId(user.id);
    form.setData({
      name: user.name,
      email: user.email,
      role_id: user.role ? user.role.id : ''
    });
    console.log(form);
  };

  const handleUpdate = (id) => {
    form.put(route('admin.user.update', id), {
      onSuccess: () => setEditId(null),
    });
  };
 
  //DELETE
  const handleDelete = (id) => {
    if (confirm('Supprimer cet utilisateur ?')) {
      form.delete(route('admin.user.destroy', id));
    }
  };

  const addUserToStaff = (newUser) => {
    setStaff((prevStaff) => [...prevStaff, newUser]);
  };
  
  return (
    <>
      <hr/>
      <div className="users" >
        <div className='ml-8 mb-8'>
          <div>
            <ButtonAddUser
              roles = {roles}
              addUserToStaff = {addUserToStaff}
              notify = {notify}
            />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Rôle</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              editId === user.id ? (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <input
                      value={form.data.name}
                      onChange={(e) => form.setData('name', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      value={form.data.email}
                      onChange={(e) => form.setData('email', e.target.value)}
                    />
                  </td>
                  <td>
                    <select
                      name="role_id"
                      value={form.data.role_id ?? ''}
                      onChange={(e) => form.setData('role_id', e.target.value)}
                      className="input"
                    >
                      <option value="">-- Sélectionner un rôle --</option>
                      {roles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button onClick={() => handleUpdate(user.id)}>✅</button>
                    <button onClick={() => setEditId(null)}>❌</button>
                  </td>
                </tr>
              ) : (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role ? user.role.name : "Aucun rôle"}</td>
                  <td>
                    <button onClick={() => handleEdit(user)}>✏️</button>
                    <button onClick={() => handleDelete(user.id)}>❌</button>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>  
    </>
  );
};

export default Users;
