import React, { useState, useEffect } from 'react';
import contactForm from './contact.css';
import { getDatabase, ref, child, get } from "firebase/database";
import app from '../../../../Firebase.config';

const ContactForm = () => {

    const [formData, setFormData] = useState([]);
    let dbRef = ref(getDatabase(app));

    useEffect(() => {
        let ref = getDatabase(app).ref("/buyers");
      ref.on("value", snapshot => {
      const data = snapshot.val()
      console.log(data)
      })
      }, []);

    return (
        <div className='row' id='contact-form'>
            <h5>All Mail List</h5>
            <button >data</button>
            {/* {
                formData.map(data => <div>{data.name}</div>)
            } */}
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