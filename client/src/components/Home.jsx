 import React, { useEffect, useState } from 'react';
import getData from '../service/userget';
import userdelete from '../service/userdelete';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user list
  const fetchUsers = async () => {
    setLoading(true);
    const data = await getData();
    if (data && data.data) {
      setUsers(data.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle delete with confirmation
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (!confirmDelete) return;

    const result = await userdelete(id);
    if (result) {
      alert('User deleted successfully.');
      fetchUsers(); // Refresh list
    } else {
      alert('Failed to delete user.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id} style={{ marginBottom: '1rem' }}>
              <strong>Name:</strong> {user._id}<br />
              <strong>Name:</strong> {user.name}<br />
              <strong>Email:</strong> {user.email}<br />
              <strong>Dept:</strong> {user.dept}<br />
              <button onClick={() => handleDelete(user._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
