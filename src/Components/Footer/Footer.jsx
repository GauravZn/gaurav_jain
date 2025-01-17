import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Footer = () => {
    return (
        <div className='footer'>

            <div className="footer-top">
                <div className="footer-top-left">
                    <AnchorLink className='name' offset={50} href='#home'>Gaurav.</AnchorLink>

                    <p className='thx'>Thank you for visiting my portfolio! I appreciate your time and interest in my work.</p>
                </div>
                {/* <div className="footer-top-right"> */}
                    {/* <div className="footer-email-input"> */}
                        {/* <img src={user_icon} alt="" /> */}
                        {/* <input type="email" placeholder="email" /> */}
                    {/* </div> */}
                    {/* <div className="footer-subscribe">Subscribe</div> */}

                {/* </div> */}
            </div>
            <hr className='breaker' />

            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    All Rights Reserved.
                </p>
                <div className="footer-bottom-right">
                    <a target='_blank' href="https://github.com/gauravzn">Github</a>
                    <a target='_blank' href="https://linkedin.com/in/gaurav-jain25">LinkedIn</a>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
                </div>
            </div>
        </div>
    )
}

export default Footer
