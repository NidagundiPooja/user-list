import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserProfileList from "./components/UserProfileList";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const userData = response.data.slice(0, 3); // Initially display the first 3 users
      setUsers(userData);
    });
  }, []);

  const handleAddUser = () => {
    const newUser = {
      id: Math.random(users.id),
      name: "name",
      email: "email",
      address: {
        city: "New City",
      },
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleCloseUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div className="app">
      <UserProfileList
        users={users}
        onAdd={handleAddUser}
        onClose={handleCloseUser}
      />
    </div>
  );
};

export default App;
