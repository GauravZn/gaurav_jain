import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
    return (
        <div id='services' className='services'>

            <div className="services-title">
                <h1>Services</h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>

            <div className="services-container">
               

                <div className='services-format'>
                    <h3>#</h3>
                    <h2>Web Development</h2>
                    <p>Skilled in both frontend and backend web design, creating seamless, responsive, and functional websites.</p>

                </div>
                <div className='services-format'>
                    <h3>#</h3>
                    <h2>Designing</h2>
                    <p>Designing focuses on creating user-friendly, visually appealing, and functional layouts for websites or apps.</p>

                </div>
                <div className='services-format'>
                    <h3>#</h3>
                    <h2>Debugging</h2>
                    <p>Debugging involves identifying and fixing errors in code to ensure smooth functionality</p>

                </div>
            </div>
        </div>
    )
}


export default Services
