import React from 'react'
import './footer.css'

import {BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Anan</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/anandiljar"><BsFacebook /></a>
        <a href="https://www.linkedin.com/in/ibtiaj/"><BsLinkedin /></a>
        <a href="https://github.com/Ananism17"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Anan. All rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer