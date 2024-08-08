import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Profile.css'

function Profile() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="profile-container">
      <h2>Profile Details</h2>
      <div className="profile-details">
        <div className="profile-item">
          <strong>User Name:</strong>{" "}
          <span>{user?.username || "Not added"}</span>
        </div>
        <div className="profile-item">
          <strong>Mobile Number:</strong>{" "}
          <span>{user?.mobileNumber || "Not added"}</span>
        </div>
        <div className="profile-item">
          <strong>Email ID:</strong> <span>{user?.email || "Not added"}</span>
        </div>
        <div className="profile-item">
          <strong>Gender:</strong> <span>{user?.gender || "Not added"}</span>
        </div>
        <div className="profile-item">
          <strong>Date of Birth:</strong>{" "}
          <span>{user?.dob || "Not added"}</span>
        </div>
        <div className="profile-item">
          <strong>Location:</strong>{" "}
          <span>{user?.location || "Not added"}</span>
        </div>
        <div className="profile-item">
          <strong>Alternate Mobile:</strong>{" "}
          <span>{user?.alternateMobile || "Not added"}</span>
        </div>
        <div className="profile-item">
          <strong>Hint Name:</strong>{" "}
          <span>{user?.hintName || "Not added"}</span>
        </div>
      </div>
      <div className="btn-container"> <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <button className="logout-button" onClick={handleLogout}>
        Edit
      </button></div>
     
    </div>
  );
}

export default Profile;
