import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I am Gaurav,</span> undergrad based in India.</h1>
      <p>Competitive programmer, DSA learner, and web development enthusiast, looking for an internship to apply my skills.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink offset={50} href='#contact'>Get in Touch</AnchorLink></div>
        <a className='dwnld' href="../../assets/Gaurav_Resume.pdf" download="Gaurav_Resume.pdf">
         
          <div className="hero-resume">Resume</div>
        </a>
      </div>
    </div>
  )
}

export default Hero
