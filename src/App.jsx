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
const App = () => {
  return (
    <>
      {/* <Navbar />
      <Home />
      <About />
      <Menu />
      <Review />
      <Contact />
      <Footer /> */}
      <ContextProvider>
        <Routes >
          <Route path="" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="review" element={<Review />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </ContextProvider>
    </>
  );
};

export default App;
