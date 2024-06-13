import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container' >
        <div className='hero-text'>
            <h1>We Ensure better education for a better world</h1>
        
     <p>Our Cutting-edge Curriculum is designed to empoer students with the knowlwdge,skills,experiences needed to excel in the dynamic field of education</p>
     <button className='btn'>Explore more<img src={dark_arrow} alt=''/></button>
        </div>

    </div>
  )
}

export default Hero
