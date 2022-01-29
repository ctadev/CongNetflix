import React, { useState } from "react";
import "./login.scss";
import SignIn from "./SignIn";
import { toggle } from "../GlobalState/loginToggleSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [signIn, setSignIn] = useState(false);
  const dispatch = useDispatch();

  const handleSignIn = () => {
    setSignIn(true);
    dispatch(toggle(false));
  };

  return (
    <main className="login_container">
      <section className="nav">
        <img
          alt="logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <button onClick={() => handleSignIn()}>Sign In</button>
      </section>
      <section className="content">
        {signIn ? (
          <SignIn />
        ) : (
          <div className="center">
            <h1>Unlimited films, TV programmes and more,</h1>
            <h2>Watch anywhere, Cancel at anytime.</h2>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership
            </p>
            <div className="inputs">
              <form action="">
                <input type="email" placeholder="Enter Email..." />
                <button onClick={() => setSignIn(true)}>GET STARTED</button>
              </form>
            </div>
          </div>
        )}
      </section>

      <section className="overlay" />
    </main>
  );
}

export default Login;
