import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
       
      </Routes>
    </div>
  );
}

export default App;
