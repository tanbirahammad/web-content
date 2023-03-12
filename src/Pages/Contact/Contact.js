import React, { useContext } from 'react';
import { ContactContext } from '../../Components/Context/ContactContext';
import contact from './contact.css';

const Contact = () => {

    const contextValue = useContext(ContactContext);
    const { alert, contactFormInfo, handleContactChange, handleSubmitContact } = contextValue;

    return (
        <section className="container-fluid" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <form>
                            <label className='form-label' htmlFor="name">Name *</label>
                            <div className='footer-contact-name'>
                                <input 
                                placeholder='First' 
                                className='form-control' 
                                name='firstName' 
                                required 
                                type="text"
                                value={contactFormInfo.firstName}
                                onChange={handleContactChange} />
                                <input 
                                placeholder='Last' 
                                className='form-control' 
                                name='lastName' 
                                required 
                                type="text"
                                value={contactFormInfo.lastName}
                                onChange={handleContactChange} />
                            </div>
                            <label className='form-label' htmlFor="email">Email *</label>
                            <input 
                            className='form-control' 
                            type="email" 
                            name="email" 
                            required
                            value={contactFormInfo.email}
                            onChange={handleContactChange} id="" />
                            <label className='form-label' htmlFor="subject">Subject</label>
                            <input 
                            className='form-control' 
                            name='subject' 
                            type="text"
                            value={contactFormInfo.subject}
                            onChange={handleContactChange} />
                            <label className='form-label' htmlFor="message">Message</label>
                            <textarea 
                            className='form-control' 
                            name='message'
                            value={contactFormInfo.message}
                            onChange={handleContactChange}></textarea>
                            {alert.success ? <p><strong style={{color:'green'}}>{alert.message}</strong></p> : <p><strong style={{color:'red'}}>{alert.error}</strong></p>}
                            <input onClick={handleSubmitContact} type="submit" value="Submit" className='btn btn-secondary' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;