import React from 'react'
import Navbar from './components/pages/Navbar'
import Footer from './components/pages/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Menu from './components/pages/Menu'
import Review from './components/pages/Review'
import Contact from './components/pages/Contact'

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