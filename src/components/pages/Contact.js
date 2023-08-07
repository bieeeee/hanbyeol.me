import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import '../Terminal.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bsqlm1p', 'template_ynbqhv8', form.current, 'BtpcX1uasUR6GhQXa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    alert('Message sent');
    window.location.assign('/');
  };

  return (
    <div className='container-contact'>
        <div className="terminal-bar">
          <img src='prompt.png' alt='folder' />
          <p>Contact me</p>
          <button className='btn-close'>
            <img src="close.png" alt="close" />
          </button>
        </div>
      <div className='contact-content'>
        <img src="email.png" alt="email" style={{padding: '23px', margin: '0 auto', width: '102px'}} />
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          {/* <div className="contact-form-content">
            <p>Let's get in touch!<br />I'd love to work on stupid and fun projects!</p>
          </div> */}
          <div className='contact-form-content'>
            <p style={{whiteSpace: 'nowrap', marginRight: '10px', width: '80px'}}>Your name:</p>
            <input type="text" name="user_name" />
          </div>
          <div className='contact-form-content'>
            <p style={{whiteSpace: 'nowrap', marginRight: '10px', width: '80px'}}>Your email:</p>
            <input type="email" name="user_email" />
          </div>
          <div className='contact-form-content'>
            <p style={{whiteSpace: 'nowrap', marginRight: '10px', width: '80px'}}>Message:</p>
            <textarea name="message" />
          </div>
          <input type="submit" value="Send" className='btn-send' />
        </form>
      </div>
    </div>
  );
};

export default Contact
