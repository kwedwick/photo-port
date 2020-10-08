import React, { useState } from 'react';


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name input
                email input
                message text area */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={handleChange} defaultValue={formState.name} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onChange={handleChange} defaultValue={formState.email}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" row="5" onChange={handleChange} defaultValue={formState.message} />
                </div>
                <button type="sumbit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;