import React from "react";

const UserProfileCard = ({ user, onClose }) => {
  return (
    <div className="user-card">
     <div>
     <img
        src={"/user.jpg"}
        alt={`${user.name} - avatar`}
      />
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
     </div>
      {onClose && (
        <span className="close-icon" onClick={() => onClose(user.id)}>
          X
        </span>
      )}
    </div>
  );
};

export default UserProfileCard;
