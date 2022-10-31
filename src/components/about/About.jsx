import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {BsPeopleFill} from 'react-icons/bs'
import {MdFolderSpecial} from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
      <h5>Meow</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <MdFolderSpecial className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
            <article className="about__card">
              <BsPeopleFill className='about__icon'/>
              <h5>Clienteles</h5>
              <small>50+ worldwide</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quibusdam fugit sequi 
            dicta porro ab sint, deserunt nobis aliquid incidunt eveniet! Est nesciunt rem itaque voluptatum 
            illum corporis voluptates recusandae?
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
        </div>
      </div>
    </section>
  )
}

export default About