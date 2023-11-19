import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import '../Terminal/Terminal.css';

export const Contact = ({t}) => {
  const form = useRef();
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    alert('Message sent');
    window.location.assign('/');
  };

  return (
    <div className='contact' id='contact'>
      <div className='container-contact'>
        <div className="terminal-bar">
          <img src='assets/icons/prompt.png' alt='folder' style={{ width: '20px', height: '20px' }} />
          <p>{t('contact.contactme')}</p>
          <button className='btn-close'>
            <img src="assets/icons/close.png" alt="" style={{ width: '12px', height: '12px' }} />
          </button>
        </div>
        <div className='contact-content'>
          <img src="assets/icons/email.png" alt="email" style={{ padding: '23px', margin: '0 auto', width: '102px', height: '102px' }} />
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
            {/* <div className="contact-form-content">
            <p>Let's get in touch!<br />I'd love to work on stupid and fun projects!</p>
          </div> */}
            <div className='contact-form-content'>
              <label htmlFor="user_name">{t('contact.name')}:</label>
              <input id="user_name" type="text" name="user_name" />
            </div>
            <div className='contact-form-content'>
              <label htmlFor="user_email">{t('contact.email')}:</label>
              <input id="user_email" type="email" name="user_email" />
            </div>
            <div className='contact-form-content'>
              <label htmlFor="message">{t('contact.message')}:</label>
              <textarea id="message" name="message" />
            </div>
            <input type="submit" value={t('contact.send')} className='btn-send' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact
