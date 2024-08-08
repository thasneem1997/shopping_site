import React, { useState } from "react";
import cross_icon from "../assets/cross_icon.png";
import "./Popup.css";

function Popup({ onClose }) {
  const [currentpopup, setcurrentpopup] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (currentpopup === "signup") {
      const userExists = users.find((user) => user.username === username);
      if (userExists) {
        alert("User already exists");
      } else if (password !== confirmPassword) {
        alert("Passwords do not match");
      } else {
        users.push({ username, password, email });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Account created successfully");
        setcurrentpopup("login");
      }
    } else {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        onClose();
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div className="popup">
      <div className="popup-container">
        <h1>{currentpopup}</h1>
        <img src={cross_icon} alt="Close" onClick={onClose} className="cross" />
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          {currentpopup === "signup" && (
            <>
              <input
                type="Email"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />

              <input
                className="form-control"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <br />
              <br />
            </>
          )}
          <button
            type="submit"
            className="btn-style"
            style={{ marginLeft: "-3px", width: "100%" }}
          >
            {currentpopup === "login" ? "Sign In" : "Create Account"}
          </button>
          <br />
          <br />
          <label>
            <input type="checkbox" required /> By continuing, I agree to the
            terms of use and privacy policy
          </label>
          {currentpopup === "signup" ? (
            <p>
              Already have an account?{" "}
              <a
                onClick={() => setcurrentpopup("login")}
                className="link-style"
              >
                Click here
              </a>
            </p>
          ) : (
            <p className="fs-9">
              Don't have an account?{" "}
              <a
                onClick={() => setcurrentpopup("signup")}
                className="link-style"
              >
                Click here
              </a>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Popup;
