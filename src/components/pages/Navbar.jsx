import React, { useContext, useRef } from "react";
import Logo from "../../assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../context/userContext";
import {toast,ToastContainer } from 'react-toastify';

const Navbar = () => {
  const context = useContext(UserAuthContext);
  const navigate = useNavigate(null)
  const navbarRef = useRef();
  const {LogOut,user,cartItems}=context

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
  }

  async function userLogout() {
    await LogOut();
    navigate('/login')
  }

  const handlecart = () => {
    return user?navigate('/cart'):
            toast.error("Login First");
  }

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <li className="link"><a href="#home">home</a></li>
          <li className="link"><a href="#about">about</a></li>
          <li className="link"><a href="#menu">menu</a></li>
          <li className="link"><a href="#review">review</a></li>
          <li className="link"><a href="#contact">contact</a></li>

          {
            context.user ? <button className="btn btn-warning" onClick={userLogout}>Logout</button>
              : <NavLink to="/login"><button className="btn btn-warning">Login</button></NavLink>
          }
        </nav>
        <div className="icons">
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={handlecart}
          ><sup className="cartCount">{cartItems.length}</sup></div>

          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
      </header>
     <ToastContainer
         position="top-center"
         autoClose={2000}
         hideProgressBar/>
    </>

  );
};

export default Navbar;
