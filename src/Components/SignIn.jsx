import React, { useRef} from "react";
import "./signin.scss";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../GlobalState/loginToggleSlice";

function SignIn() {
  const showRegister = useSelector((state) => state.loginToggleSlice);
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const createemailRef = useRef(null);
  const createpasswordRef = useRef(null);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      emailRef.current.value = "";
      passwordRef.current.value = "";
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        createemailRef.current.value,
        createpasswordRef.current.value
      );
      createemailRef.current.value = "";
      createpasswordRef.current.value = "";
      console.log(user);
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
            <input ref={createemailRef} type="email" placeholder="Email" />
            <input
              ref={createpasswordRef}
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
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button onClick={signIn}>Log In</button>
            <p>
              New to Netflix?{" "}
              <span onClick={() => dispatch(toggle(true))}>Sign Up Now.</span>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignIn;
