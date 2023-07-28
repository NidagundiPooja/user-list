import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const UserProfileCard = ({ user, onClose }) => {
  // Assuming you have a placeholder image service URL
  const imageUrl = `https://via.placeholder.com/150?text=User${user.id}`;

  return (
    <div className="card">
      <img src={imageUrl} alt={`User ${user.id}`} className="profile-image" />
      <div>
        <strong>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>City:</strong> {user.address.city}
      </div>
      {onClose && (
        <span className="close-icon" onClick={() => onClose(user.id)}>
          &#10005;
        </span>
      )}
    </div>
  );
};

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data.slice(0, 3));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addUserCard = () => {
    if (users.length < 10) {
      setUsers([...users, users[users.length - 1]]);
    }
  };

  const removeUserCard = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="app">
      <h1>User Profile Cards</h1>
      <div className="card-container">
        {users.map((user) => (
          <UserProfileCard key={user.id} user={user} onClose={removeUserCard} />
        ))}
      </div>
      {users.length < 10 && <button onClick={addUserCard}>Add Card</button>}
    </div>
  );
};

export default App;
