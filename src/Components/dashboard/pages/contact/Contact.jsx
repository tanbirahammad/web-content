import React from 'react';
import contactForm from './contact.css';

const ContactForm = () => {
    return (
        <div className='row' id='contact-form'>
            <h5>All Mail List</h5>
            <div className="mail-conainer">
                <div className="mail-list shadow-sm">
                    <p>Name</p>
                    <p>Email</p>
                    <p>Subject</p>
                    <p>Message</p>
                    <div>
                        <button className='btn btn-danger'>delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;