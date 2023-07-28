import React from "react";
import UserProfileCard from "./UserProfileCard";

const UserProfileList = ({ users, onAdd, onClose }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserProfileCard key={user.id} user={user} onClose={onClose} />
      ))}
      {onAdd && <button onClick={onAdd}>Add</button>}
    </div>
  );
};

export default UserProfileList;
