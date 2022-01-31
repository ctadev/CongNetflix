import React, { useState } from "react";
import "./signin.scss";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../GlobalState/loginToggleSlice";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const showRegister = useSelector((state) => state.loginToggleSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, createEmail, createPassword);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signin_container">
      {showRegister ? (
        <div className="sign_in">
          <form>
            <h1>Create Account</h1>
            <input
              value={createEmail}
              onChange={(e) => setCreateEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <input
              value={createPassword}
              onChange={(e) => setCreatePassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button onClick={register}>Register</button>
          </form>
        </div>
      ) : (
        <div className="sign_in">
          <form>
            <h1>Sign In</h1>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button onClick={signIn}>Log In</button>
            <p>
              New to Netflix?
              <span onClick={() => dispatch(toggle(true))}>Sign Up Now.</span>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignIn;
