import React from "react";

const UserProfileCard = ({ user, onClose }) => {
  return (
    <div className="user-card">
      <img
        src="https://www.istockphoto.com/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-gm1130884625-299239257"
        alt="User Avatar"
      />
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      {onClose && (
        <span className="close-icon" onClick={() => onClose(user.id)}>
          X
        </span>
      )}
    </div>
  );
};

export default UserProfileCard;
