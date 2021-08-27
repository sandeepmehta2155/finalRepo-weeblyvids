import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./auth-context";

export function Login() {
  const [userName, setUserName] = useState(null);
  const [passwordInput, setUserPassword] = useState("");

  const {
    userExists,
    setUserExists,
    setCheckPassword,
    validUserName,
    validPassword,
    isUserLoggedIn,
    checkPassword,
    LogOut,
    LoginUserWithCredentials
  } = useAuth();

  function LoginHandler() {
    userName ? setUserExists("none") : setUserExists("block");

    passwordInput ? setCheckPassword("none") : setCheckPassword("block");
    return isUserLoggedIn
      ? LogOut()
      : LoginUserWithCredentials(userName, passwordInput);
  }
  return (
    <>
      <div className="modalForLogin">
        <h2>Login</h2>
        <input
          className="userLoginInput"
          type="text"
          id="txt"
          placeholder="    User name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <small style={{ color: "red", display: userExists }}>
          User doesn't exists
        </small>
        <small style={{ color: "red", display: validUserName }}>
          Enter valid UserName
        </small>
        <br />
        <input
          className="passWordInput"
          type="password"
          id="email"
          placeholder="     Password"
          value={passwordInput}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <br />
        <small style={{ color: "red", display: checkPassword }}>
          Enter Correct Password
        </small>
        <small style={{ color: "red", display: checkPassword }}>
          Enter Correct Password
        </small>
        <br />
        <span
          onClick={() => {
            setUserName("guest");
            setUserPassword("guest@123");
          }}
        >
          Login as Guest ?
        </span>{" "}
        <br />
        <button className="LoginButton" onClick={LoginHandler}>
          Login
        </button>
        <Link to="/signup">
          <button className="SignupButton">Sign Up</button>
        </Link>
        {isUserLoggedIn && (
          <span style={{ color: "green" }}>
            User Logged in successfully
            <span role="img" aria-labelledby="emoji">
              ✅
            </span>
          </span>
        )}
      </div>
    </>
  );
}
