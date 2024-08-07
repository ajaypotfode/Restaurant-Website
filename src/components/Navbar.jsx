import React, { useContext, useEffect, useRef, useState } from "react";
import Logo from "../assets/images/logo.png";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { UserAuthContext } from "../context/userContext";
import Home from "./Home";

const Navbar = () => {
  const path = useLocation();
  const navbarRef = useRef();
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
  };
  const context = useContext(UserAuthContext);
  const navigate = useNavigate(null)

  async function userLogout() {
    await context.LogOut();
    navigate('/login')
  }
  return (
    <>
      {
        path.pathname == "/login" || path.pathname == "/signup" ? null :
          <>
            <header className="header">
              <a href="#" className="logo">
                <img src={Logo} alt="" />
              </a>
              <nav className="navbar" ref={navbarRef}>
                <NavLink className="link" to="">home</NavLink>
                <NavLink className="link" to="about">about</NavLink>
                <NavLink className="link" to="menu">menu</NavLink>
                <NavLink className="link" to="review">review</NavLink>
               
                 {
                  context.user?<button className="btn btn-warning" onClick={userLogout}>Logout</button>
                              : <NavLink to="/login"><button className="btn btn-warning">Login</button></NavLink>
                 }
              </nav>
              <div className="icons">
                <div
                  className="fas fa-bars"
                  id="menu-btn"
                  onClick={navbarHandler}
                ></div>
              </div>
            </header>

          </>}

    </>

  );
};

export default Navbar;
