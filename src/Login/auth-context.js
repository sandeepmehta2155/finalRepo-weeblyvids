import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const { login } = JSON.parse(localStorage.getItem("login")) || {
    login: null
  };

  const [isUserLoggedIn, setUserLogin] = useState(login);

  const [userExists, setUserExists] = useState(false);

  const [checkPassword, setCheckPassword] = useState(null);

  const [responseFromDB, setResponseFromDB] = useState(null);

  useEffect(() => {
    responseFromDB === "Req can't be made"
      ? setUserExists("block")
      : setUserExists("none");

    responseFromDB === "wrong password"
      ? setCheckPassword("block")
      : setCheckPassword("none");

    if (responseFromDB === "user auth successfull") {
      setUserLogin(true);
      localStorage.setItem("login", JSON.stringify({ login: true }));
    }
  }, [responseFromDB]);

  function LogOut() {
    setUserLogin(false);
    setUserExists("none");
    setCheckPassword("none");
    localStorage.removeItem("historyItems");
    localStorage.removeItem("login");
    localStorage.removeItem("likedVideos");
    localStorage.removeItem("subscription");
    localStorage.removeItem("username");
  }

  function LoginUserWithCredentials(username, password) {
    (async function () {
      axios.post("url").then((resp) => {
        setResponseFromDB(resp.data.message);

        if (resp === "user auth successfull") {
          localStorage.setItem(
            "historyItems",
            JSON.stringify({ historyItems: resp.data.historyitems })
          );

          localStorage.setItem(
            "likedVideos",
            JSON.stringify({ likeVideos: resp.data.likedvideos })
          );

          localStorage.setItem(
            "subscription",
            JSON.stringify({ subscription: resp.data.subscription })
          );

          localStorage.setItem(
            "username",
            JSON.stringify({ username: resp.data.username })
          );

          setTimeout(() => navigate("/"), 800);
        }
      });
    })();
  }

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        LogOut,
        LoginUserWithCredentials,
        setCheckPassword,
        checkPassword,
        setUserExists,
        userExists
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
