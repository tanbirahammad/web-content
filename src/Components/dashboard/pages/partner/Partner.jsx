import React, { useState } from 'react';
import style from './partner.css';

const PartnerDash = () => {

    const [partnerInfo, setPartnerInfo] = useState('list');

    const handlePartnerInfo = (e) => {
        setPartnerInfo(e.target.value);
    }

    return (
        <div className="row" id="partnerForm">
            <h5>All Partner Applicants List</h5>
            
                {partnerInfo === 'list' && <div className="partner-card-container">
                <div className="input-group mb-3 search-group">
                    <input type="text" className="form-control" placeholder="search..." aria-label="Username" aria-describedby="basic-addon1" />
                    <span className="input-group-text btn btn-secondary" id="basic-addon1"><i className="bi bi-search"></i></span>
                </div>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Email</h6>
                            <div>
                                <button onClick={handlePartnerInfo} value='info' className='card-link btn btn-info'>See Details</button>
                                <button className='card-link btn btn-danger'>Delete</button>
                            </div>
                        </div>
                    </div>  
                </div>}
                {partnerInfo === 'info' && <div className="partnerFormDetails">
                    <div>
                        <button onClick={handlePartnerInfo} value='list' className='btn btn-outline-dark'><i className="bi bi-arrow-left"></i> Return to Partner List</button>
                    </div>
                    <div className='partnerInfo'>
                        <h6>Name</h6>
                        <h6>Email</h6>
                        <h6>Phone</h6>
                        <h6>Hear about us</h6>
                        <h6>Company Name</h6>
                        <h6>Business Type</h6>
                        <h6>Address</h6>
                        <h6>Website</h6>
                    </div>
                </div>}
        </div>
    );
};

export default PartnerDash;