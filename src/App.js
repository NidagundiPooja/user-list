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
    // Assuming the API always returns unique IDs, you can add a new user like this:
    // Replace with the actual user data you want to add
    const newUser = {
      id: Math.random(),
      name: "New User",
      email: "newuser@example.com",
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
    <div className="App">
      <UserProfileList
        users={users}
        onAdd={handleAddUser}
        onClose={handleCloseUser}
      />
    </div>
  );
};

export default App;
