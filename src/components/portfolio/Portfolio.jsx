import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project.jpeg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Project title</h3>
          <div className="portfolio__items-cta">
            <a href="https://www.google.com" className='btn' target="_blank">Github</a>
            <a href="#" className='btn btn-primary' target="_blank">Demo</a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Project title</h3>
          <div className="portfolio__items-cta">
            <a href="https://www.google.com" className='btn' target="_blank">Github</a>
            <a href="#" className='btn btn-primary' target="_blank">Demo</a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Project title</h3>
          <div className="portfolio__items-cta">
            <a href="https://www.google.com" className='btn' target="_blank">Github</a>
            <a href="#" className='btn btn-primary' target="_blank">Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio