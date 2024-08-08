import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Review from './components/Review'
import Contact from './components/Contact'

const Main = () => {
  return (
    <div className='main-Container'>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Review />
      <Contact/>
      <Footer />
    </div>
  )
}

export default Main