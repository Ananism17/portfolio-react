import React from 'react'
import './about.css'
import ME from '../../assets/me2.png'
import {FaAward} from 'react-icons/fa'

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
              <small>Working for a week</small>
            </article>
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Working for a week</small>
            </article>
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Working for a week</small>
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