import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const UserProfileCard = ({ user, onClose }) => {
  return (
    <div className="card">
      {user.name} <br />
      {user.email} <br />
      {user.address.city}
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
    <div className="App">
      <h1>User Profile Cards</h1>
      <div className="card-container">
        {users.map((user) => (
          <UserProfileCard key={user.id} user={user} onClose={removeUserCard} />
        ))}
      </div>
      <button onClick={addUserCard}>Add Card</button>
    </div>
  );
};

export default App;
