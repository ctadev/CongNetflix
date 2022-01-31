import React, { useEffect, useState } from "react";
import "./nav.scss";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [navbg, setNavbg] = useState(false);
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleHome = () => {
    navigate("/");
  };

  function navscroll() {
    if (window.scrollY > 100) {
      setNavbg(true);
    } else {
      setNavbg(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", navscroll);
    return () => window.removeEventListener("scroll", navscroll);
  }, []);

  return (
    <div className={`nav ${navbg && "nav_black"}`}>
      <nav className="nav_content">
        <img
          onClick={() => handleHome()}
          alt="Netflix logo"
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <img
          onClick={() => handleProfile()}
          alt="avatar"
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
      </nav>
    </div>
  );
}

export default Nav;
