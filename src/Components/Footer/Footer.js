import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import bottomLogo from '../../images/Company-Logo_Bottom.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ContactContext } from '../Context/ContactContext';

const Footer = () => {

    const contextValue = useContext(ContactContext);
    const { alert, contactFormInfo, handleContactChange, handleSubmitContact } = contextValue;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <footer>
            <div className="container-fluid top-footer">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h3>Contact</h3>
                        <div className="hr-bar">
                            <hr className='border-danger border-4 opacity-100' />
                            <i class="bi bi-circle-fill"></i>
                        </div>
                    </div>
                    <div className="address-container col-md-6">
                        <div className="text-center logo">
                            <NavLink to='/'>
                                <img src={bottomLogo} alt="Artistic Communication" />
                            </NavLink>
                        </div>
                        <div className="address-bar">
                            <i class="bi bi-geo-alt-fill"></i>
                            <p>House 16 Suite E-2 Road 13 Block G Niketan <br />
                            Gulshan 1 Dhaka 1212 Bangladesh
                            </p>
                        </div>
                        <div className="address-bar">
                            <i class="bi bi-telephone-fill"></i>
                            <p>+880 2 4881 2846<br />
                                +880 1717 720 024 +880 1712 750 382
                            </p>
                        </div>
                        <div className="address-bar">
                            <i class="bi bi-envelope"></i>
                            <p>info@artcombd.com<br />
                                artcombd@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 form-container">
                        <form action="">
                            <label htmlFor="name">Name <span style={{color:'#ed1d24'}}>*</span></label><br />
                            <input
                                style={{width:'49%'}} 
                                type="text" 
                                name='firstName'
                                placeholder='First'
                                value={contactFormInfo.firstName}
                                onChange={handleContactChange} 
                                required />
                            <input 
                                style={{width:'49%',marginLeft:'2%'}} 
                                type="text" 
                                name='lastName' 
                                placeholder='Last'
                                value={contactFormInfo.lastName}
                                onChange={handleContactChange}
                                required />
                            <br />
                            <label htmlFor="email">Email <span style={{color:'#ed1d24'}}>*</span></label><br />
                            <input 
                                style={{width:'100%'}} 
                                type="email" 
                                name='email'
                                value={contactFormInfo.email}
                                onChange={handleContactChange} 
                                required />
                            <br />
                            <label htmlFor="subject">Subject</label><br />
                            <input 
                                style={{width:'100%'}} 
                                type="text" 
                                name='subject'
                                value={contactFormInfo.subject}
                                onChange={handleContactChange} />
                            <br />
                            <label htmlFor="message">Message</label><br />
                            <input 
                                style={{width:'100%',height:'100px'}} 
                                type="text" 
                                name='message'
                                value={contactFormInfo.message}
                                onChange={handleContactChange} />
                            <br />
                            {alert.success ? <p><strong style={{color:'green'}}>{alert.message}</strong></p> : <p><strong style={{color:'white'}}>{alert.error}</strong></p>}
                            <input onClick={handleSubmitContact} className='shadow-sm btn-red' type="submit" value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <div className="text-end">
                    <button onClick={handleShow} className='shadow-sm btn-red btn-getintouch'>GET IN TOUCH</button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Send Us a Message</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <label className='form-label' htmlFor="name">Name *</label>
                                <div className='footer-contact-name'>
                                    <input 
                                    style={{border:'1px solid #454545'}} 
                                    required className='form-control' 
                                    placeholder='First' 
                                    type="text" 
                                    name="firstName"
                                    value={contactFormInfo.firstName}
                                    onChange={handleContactChange} />
                                    <input 
                                    style={{border:'1px solid #454545'}} 
                                    required 
                                    className='form-control' 
                                    placeholder='Last' 
                                    type="text" 
                                    name="lastName"
                                    value={contactFormInfo.lastName}
                                    onChange={handleContactChange} />
                                </div>
                                <label style={{marginTop:'15px'}} className='form-label' htmlFor="email">Email *</label>
                                <input 
                                style={{border:'1px solid #454545'}} 
                                required 
                                className='form-control' 
                                type="email" 
                                name="email"
                                value={contactFormInfo.email}
                                onChange={handleContactChange} />
                                <label style={{marginTop:'15px'}} className='form-label' htmlFor="subject">Subject</label>
                                <input 
                                style={{border:'1px solid #454545'}} 
                                className='form-control' 
                                type="text" 
                                name="subject"
                                value={contactFormInfo.subject}
                                onChange={handleContactChange} />
                                <label style={{marginTop:'15px'}} className='form-label' htmlFor="message">Message</label>
                                <textarea 
                                style={{border:'1px solid #454545'}} 
                                className='form-control' 
                                type="text" 
                                name="message"
                                value={contactFormInfo.message}
                                onChange={handleContactChange}></textarea>
                                {alert.success ? <p><strong style={{color:'green'}}>{alert.message}</strong></p> : <p><strong style={{color:'red'}}>{alert.error}</strong></p>}
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmitContact}>
                            Send
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            <div className="container-fluid bottom-footer">
                <div className="row text-center">
                    <p>@2023 All Rights and Reserved by <strong style={{color:'green'}}>Artistic Communication</strong></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;