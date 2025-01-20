import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { toast } from 'react-toastify'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fd9aa3b3-1a73-4d0c-a406-d92acf3bf5b6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      toast.success("Email sent");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I’d love to connect with you! If you have any questions, comments, or feedback, please reach out using the form below.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <span>click:</span> <a className='mail_link' href="mailto:gauravjain.tech@gmail.com">gauravjain.tech@gmail.com</a>

            </div>

            {/* <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Kota, Rajasthan</p>
            </div> */}
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">name.</label>
          <input id='name' type="text"  name='Name' />
          <label htmlFor="">mail.</label>
          <input id='email' type="email" name='Email' />
          <label htmlFor="">message.</label>
          <textarea id='message' name="Message" rows="8" ></textarea>
          <button type='submit' className="contact-submit">send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
