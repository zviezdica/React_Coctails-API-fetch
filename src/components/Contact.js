import React from "react";

const Contact = () =>{
    return(
    <section className='contact-section'>
        <h1 className='contact-title'>Don't hesitate to contact us: </h1>
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
    </section>
    )
}

export default Contact;