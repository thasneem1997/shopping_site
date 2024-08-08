import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import basket_icon from "../assets/basket_icon.png";
import profile_icon from "../assets/profile_icon.png";
import search_icon from "../assets/search_icon.png";
import "./Navbar.css";
import { Storecontext } from "../context/Storecontext";
import Popup from "./Popup";

function Navbar() {
  const { cart } = useContext(Storecontext);
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
// function for handle logout and popup close
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  const handlePopupClose = () => {
    setUser(JSON.parse(localStorage.getItem("loggedInUser")));
    setShowPopup(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ marginLeft: "30px" }}>
            <img src={logo} alt="Logo" width="130" height="auto" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item center-align">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: "rgb(232 122 11)", fontWeight: "700" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#product">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <a href="#" className="me-3">
                <img src={search_icon} width="30" height="30" alt="Search" />
              </a>
              <Link to="/cart" className="me-3 position-relative">
                <img src={basket_icon} width="30" height="30" alt="Basket" />
                {cart.length > 0 && (
                  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                )}
              </Link>
              <Link to={"/profile"} className="me-3">
                <img src={profile_icon} width="30" height="30" alt="Profile" />
              </Link>
              {user ? (
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => setShowPopup(true)}
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      {showPopup && <Popup onClose={handlePopupClose} />}
    </>
  );
}

export default Navbar;
