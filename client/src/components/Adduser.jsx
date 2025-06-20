 import React, { useState } from 'react';
import postData from '../service/userpost'; // make sure this is a default export

const Adduser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData(name, email, dept);
      setMessage('User added successfully!');
      setName('');
      setEmail('');
      setDept('');
    } catch (error) {
      console.error('Error adding user:', error);
      setMessage('Failed to add user.');
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />

        <input
          type="text"
          name="dept"
          placeholder="Department"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          required
        /><br />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Adduser;
