import React from "react";
import Nav from "../Components/Nav";
import { logout } from "../GlobalState/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "./profile.scss";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice);
  const handleLogout = () => {
    signOut(auth);
    dispatch(logout());
  };
  return (
    <div className="profile_container">
      <Nav />
      <div className="profile_content">
        <div className="profile">
          <h1>Profile</h1>
          <div className="profile_info">
            <img
              alt="avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            />
            <div className="info">
              <h2>{user.user}</h2>
              <button onClick={() => handleLogout()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
