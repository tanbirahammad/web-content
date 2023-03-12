import React, { useEffect, useState } from 'react';
import contactForm from './contact.css';
import { getDatabase, ref, onValue, remove} from "firebase/database";
import app from '../../../../Firebase.config';

const ContactForm = () => {


    const [contactInfo, setContactInfo] = useState([]);
    const [findkey, setFindkey] = useState([]);

    const db = getDatabase(app);
    useEffect(()=> {
        onValue(ref(db, 'contactForm/'), snapshot => {
            // const preData = snapshot.val();
            // setFindkey(preData);
            const data = Object.values(snapshot.val());
            setContactInfo(data);
        })
    }, []);

    const handleDelete = (list) => {
        remove(ref(db, 'gf'));
    }

    return (
        <div className='row' id='contact-form'>
            <h5>All Mail List</h5>
            <div className='mail-conainer'>
                {
                    contactInfo.map(list =>
                    <div 
                    key={list.uuid}
                    className="mail-list">
                        <div>
                            <p>Name: {list.firstName +' ' + list.lastName}</p>
                            <p>Email: {list.email}</p>
                            <p>Subject: {list.subject}</p>
                            <p>Message: {list.message}</p>
                        </div>
                        <div>
                            <button onClick={()=>handleDelete(list)} className='btn btn-danger'>delete</button>
                        </div>
                    </div>
                    )
                }
            </div>
            
        </div>
    );
};

export default ContactForm;