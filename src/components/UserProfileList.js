import React from "react";
import UserProfileCard from "./UserProfileCard";

const UserProfileList = ({ users, onAdd, onClose }) => {
  return (
    <div className="users-container">
     <div className="user-list">
     {users.map((user) => (
        <UserProfileCard key={user.id} user={user} onClose={onClose} />
      ))}
     </div>
      <div>
      {onAdd && <button onClick={onAdd}>Add</button>}
      </div>
    </div>
  );
};

export default UserProfileList;
