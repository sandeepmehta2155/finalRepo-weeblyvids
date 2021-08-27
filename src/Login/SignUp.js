import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function SignUp() {
  const [userName, setUserName] = useState("");
  const [passwordInput, setUserPassword] = useState("");
  const [passwordReInput, setpasswordReInput] = useState("");

  const [passwordCheck, setCheckPassword] = useState("none");
  const [userExists, setUserExists] = useState("none");
  const [userAdded, setUserAdded] = useState("none");

  const [validUserName, setValidUserName] = useState("none");

  const [type, setType] = useState("password");
  const [responseFromDataBase, setResponseFromDataBase] = useState("");

  const reg = /([0-9])/;

  useEffect(() => {
    setUserExists("block");
    responseFromDataBase === "user Exists for given username"
      ? setUserExists("block")
      : setUserExists("none");

    responseFromDataBase === "Enter valid username"
      ? setValidUserName("block")
      : setValidUserName("none");

    reg.test(passwordInput) &&
    passwordInput === passwordReInput &&
    responseFromDataBase === "user added in database"
      ? setUserAdded("block")
      : setUserAdded("none");
  }, [responseFromDataBase]);

  async function setResponseFromDB() {
    await axios
      .post("https://videolib.sandeepmehta215.repl.co/signup", {
        username: userName,
        password: passwordInput
      })
      .then((response) => {
        setResponseFromDataBase(response.data.message);
      });
  }

  return (
    <div className="signUpPage">
      <h2>Subscribe</h2>
      <input
        className="userLoginInput"
        type="text"
        id="txt"
        placeholder="    User name"
        onChange={(e) => setUserName(e.target.value)}
      />

      <small style={{ color: "red", display: validUserName }}>
        User-name can't be blank
      </small>
      <small style={{ color: "red", display: userExists }}>User exists</small>
      <br />

      <br />

      <input
        className="passWordInput"
        type="password"
        id="email"
        placeholder="     Password"
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <br />

      <input
        className="passWordInput"
        id="email"
        type={type}
        placeholder="     Re-enter your password"
        onChange={(e) => setpasswordReInput(e.target.value)}
      />
      <br />

      <br />
      <label id="shpass">Show password</label>
      <input
        id="check"
        type="checkbox"
        onClick={() => {
          if (type === "password") setType("text");
          else setType("password");
        }}
      />
      <br />

      <br />
      {!reg.test(passwordInput) && (
        <div style={{ color: "red" }}>Password should contain a number </div>
      )}
      <br />
      {passwordReInput && (
        <div>
          {passwordReInput !== passwordInput && (
            <div style={{ color: "red" }}> Error! Try matching password </div>
          )}
        </div>
      )}
      <br />
      <Link to="/login">
        <button className="LoginButton">Back to Login</button>
      </Link>
      <button
        className="SignupButton"
        onClick={() => {
          setResponseFromDB();
        }}
      >
        Sign Up
      </button>
      <span style={{ color: "green", display: userAdded }}>
        User Added in database
        <span role="img" aria-labelledby="emoji">
          ✅
        </span>
      </span>
    </div>
  );
}
