import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapPin, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import '../fontawesome';


const Contact = () =>{
    return(
    <section className='contact-section'>
        <h1 className='contact-title'>Contact us: </h1>
        <form className='form'>
            <label htmlFor='firstName'>First Name: *</label><br/>
            <input type='text' name='firstName' id='firstName' required/><br/>
            <label htmlFor='lastName'>Last Name: *</label><br/>
            <input type='text' name='lastName' id='lastName'/><br/>
            <label htmlFor='email'>E-mail: *</label><br/>
            <input type='email' name='email' id='email' placeholder='example@email.com'/><br/>
            <label htmlFor='tel'>Telephone number:</label><br/>
            <input type='tel' name='tel' id='tel'/><br/>
            <label htmlFor='message'>How can we help you?</label><br/>
            <textarea name='message' id='message'></textarea>
            <input type='submit' className='btn submit-btn' value='Submit'/>
        </form>
        <article className='contact-links'>
            <div className='contact-div'>
                <FontAwesomeIcon icon={faPhone} className='contact-icons'/>
                <a href='tel:+385123456'>+385 123 456</a>
            </div>
            <div className='contact-div'>
                <FontAwesomeIcon icon={faEnvelope} className='contact-icons'/>
                <a href='mailto:info@liquorstore.com'>info@liquorstore.com</a>
            </div>
            <div className='contact-div'>
                <FontAwesomeIcon icon={faMapPin} className='contact-icons'/>
                <p>Ulica 4, 12345 Grad</p>
            </div>
            <iframe title='google-map' className='google-map' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d22904.8117108515!2d15.92480394173199!3d45.79934898927552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sliquor%20store!5e0!3m2!1shr!2shr!4v1638884778684!5m2!1shr!2shr" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
            <div className='contact-div brands-div'>
                <a href='https://www.facebook.com/'>
                    <FontAwesomeIcon icon={faFacebook} className='contact-icons brand-icons'/>
                </a>
                <a href='https://twitter.com/'>
                    <FontAwesomeIcon icon={faTwitter} className='contact-icons brand-icons'/>
                </a>
                <a href='https://www.instagram.com/'>
                    <FontAwesomeIcon icon={faInstagram} className='contact-icons brand-icons'/>
                </a>
            </div>
        </article>
    </section>
    )
}

export default Contact;