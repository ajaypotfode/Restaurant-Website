import React from "react";
import "./assets/css/style.css";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
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
