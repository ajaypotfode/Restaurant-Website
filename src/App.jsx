import React from "react";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/userPages/Login";
import SignUp from "./components/userPages/SignUp";
import ContextProvider from "./context/userContext";
import Main from "./Main";
import Cart from "./components/cart/Cart";
const App = () => {
  return (
    <>
      <ContextProvider>
        <Routes >
            <Route path="" element={<Main />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
             <Route path="/cart" element={<Cart/>} />
        </Routes>
      </ContextProvider>
    </>
  );
};

export default App;
