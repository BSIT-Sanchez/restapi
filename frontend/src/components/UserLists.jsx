// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserLists = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    // Fetch users from the backend
    axios.get('http://localhost:5000/api/user/allUsers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/api/user/deleteUser/${id}`)
      .then(() => {
        // Remove the deleted user from the state
        setUsers(users.filter(user => user._id !== id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };
  const addUser = () => {
    
    axios.post('http://localhost:5000/api/user/NewUser', newUser)
      .then(response => {
        // Add the new user to the state
        setUsers([...users, response.data]);
        setNewUser({ name: '', email: '' }); // Reset form
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };


  return (
    <div>
      <h1>User List</h1>

      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
        />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map(user => (
          <li key={user._id}>
            <div className='flex justify-start items-center gap-2'>
              <p>{user.name}</p> 
              <p>{user.description}</p>

            </div>
             <button onClick={() => deleteUser(user._id)} className='bg-red-700 p-2 rounded-sm text-white shadow-md'>Delete</button>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserLists;
