import "./app.scss";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import store from "./Store/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./GlobalState/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(login({ uid: currentUser.uid, email: currentUser.email }));
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, [dispatch]);

  const user = useSelector((state) => state.userSlice);

  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          {user.user ? (
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          ) : (
            <Login />
          )}
        </Router>
      </Provider>
    </div>
  );
}

export default App;
