import React from 'react'

import {BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/ibtiaj" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/ananism17" target="_blank"><BsGithub /></a>
        <a href="https://facebook.com/anandiljar" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials