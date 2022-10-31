import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import { useState, useEffect } from 'react';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


  return (

    
    <>

      {loading ? (

        <div className="loader-container">
        </div>
          
      )  : (
        <div>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </div>    
           
        )}
    </>
  )
}

export default App