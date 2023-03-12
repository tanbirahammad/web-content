import React, { useEffect, useState } from 'react';
import style from './partner.css';
import { getDatabase, onValue, ref } from 'firebase/database';
import app from '../../../../Firebase.config';

const PartnerDash = () => {

    const [clickedPartner, setClickedPartner] = useState({});
    const [partnerForm, setPartnerForm] = useState([]);
    const [partnerInfo, setPartnerInfo] = useState('list');

    const db = getDatabase(app);

    const handlePartnerInfo = (list) => {
        setClickedPartner(list);
        setPartnerInfo('info');
    }

    useEffect(()=> {
        onValue(ref(db, 'partnerInfo'), snapshot => {
            const data = Object.values(snapshot.val());
            setPartnerForm(data);
        })
    }, [])
    console.log(clickedPartner);

    return (
        <div className="row" id="partnerForm">
            <h5>All Partner Applicants List</h5>
            
                {partnerInfo === 'list' && <div className="partner-card-container">
                <div className="input-group mb-3 search-group">
                    <input type="text" className="form-control" placeholder="search..." aria-label="Username" aria-describedby="basic-addon1" />
                    <span className="input-group-text btn btn-secondary" id="basic-addon1"><i className="bi bi-search"></i></span>
                </div>
                    <div className="card shadow-sm">
                        {
                            partnerForm.map(list => 
                                <div
                                key={list.email}>
                                    <div className="card-body">
                                    <h5 className="card-title">{list.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{list.email}</h6>
                                    <div>
                                        <button onClick={()=>handlePartnerInfo(list)} className='card-link btn btn-info'>See Details</button>
                                        <button className='card-link btn btn-danger'>Delete</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>  
                </div>}
                {partnerInfo === 'info' && <div className="partnerFormDetails">
                    <div>
                        <button onClick={handlePartnerInfo} value='list' className='btn btn-outline-dark'><i className="bi bi-arrow-left"></i> Return to Partner List</button>
                    </div>
                    <div className='partnerInfo'>
                        <h6>Name: {clickedPartner.name}</h6>
                        <h6>Email: {clickedPartner.email}</h6>
                        <h6>Phone: {clickedPartner.areaCode + ' ' + clickedPartner.phone}</h6>
                        <h6>Hear about us: {clickedPartner.hearAboutUs}</h6>
                        <h6>Company Name: {clickedPartner.companyName}</h6>
                        <h6>Business Type: {clickedPartner.companyType}</h6>
                        <h6>Address: {clickedPartner.streetAddress + ', ' + clickedPartner.addressLine2 + ', ' + clickedPartner.city + ', ' + clickedPartner.postal}</h6>
                        <h6>Website: {clickedPartner.website}</h6>
                    </div>
                </div>}
        </div>
    );
};

export default PartnerDash;