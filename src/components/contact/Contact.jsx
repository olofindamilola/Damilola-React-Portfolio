import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gejt559', 'template_2kzzec6', form.current, 'DkUab_-BZin_n9XfC')

    e.target.reset()
  };
  
  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kdammy2017@gmail.com</h5>
            <a href="mailto:omogoyejuwon@gmail.com" target='_blank'>Send a message</a>
          </article>

        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>Damilola Olofin</h5>
          <a href="https://m.me/omogoye.juwon.1/" target='_blank'>Send a message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>07063008116</h5>
          <a href="https://api.whatsapp.com/send?phone+2347063008116" target='_blank'>Send a message</a>
        </article>
        
      </div>
       {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your 
            Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" rows='7' placeholder="Message" required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
        </form> 
    </div>
  </section>
  )
}

export default Contact