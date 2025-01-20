import React from 'react'
import './About.css'
// import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/contact_img.jpeg";

const About = () => {
  return (
    <div id='about' className='about'>
      
        <div className="about-title">
            <h1>About</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img className='about_profile' src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a competitive programmer and a student of Data Structures and Algorithms (DSA) and web development.</p>
                    <p>I am currently seeking an internship opportunity to further enhance my skills and apply my knowledge in real-world projects.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>C++</p> <hr style={{width:"25vw"}}/></div>
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"40vw"}}/></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:"35vw"}}/></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:"40vw"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">

        </div>
    </div>
  )
}

export default About
