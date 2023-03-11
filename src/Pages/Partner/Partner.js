import React, { useState } from 'react';
import partner from './patner.css';

const Partner = () => {
    const [alert, setAlert] = useState({});
    const [term1, setTerm1] = useState(false);
    const [term2, setTerm2] = useState(false);
    const [term3, setTerm3] = useState(false);
    const [partnerInfo, setPartnerInfo] = useState({
        name: '',
        email: '',
        areaCode: '',
        phone: '',
        hearAboutUs: '',
        companyName: '',
        companyType: '',
        streetAddress: '',
        addressLine2: '',
        city: '',
        postal: '',
        website: ''
    });

    let name, value;
    const handlePartnerChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        
        setPartnerInfo({ ...partnerInfo, [name]: value });
    }

    const handlePartnerSubmit = (e) => {
        e.preventDefault();
        const {name, email, areaCode, phone, hearAboutUs, companyName, companyType, streetAddress, addressLine2, city, postal, website} = partnerInfo;
        if (term1 && term2 && term3 && name && email && areaCode && phone && companyName && companyType) {
            const res = fetch('https://artistic-communication-default-rtdb.asia-southeast1.firebasedatabase.app/partnerInfo.json', {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    areaCode,
                    phone,
                    hearAboutUs,
                    companyName,
                    companyType,
                    streetAddress,
                    addressLine2,
                    city,
                    postal,
                    website
                }),
                headers: {
                "Content-type": "application/json"
                }
            });
            if (res) {
                setPartnerInfo({
                    name: '',
                    email: '',
                    areaCode: '',
                    phone: '',
                    hearAboutUs: '',
                    companyName: '',
                    companyType: '',
                    streetAddress: '',
                    addressLine2: '',
                    city: '',
                    postal: '',
                    website: ''
                });
                setAlert({
                    success: true,
                    message: 'Your message deliver successfully.',
                    error: ''
                });
            }
            else{
                setAlert({
                    success: false,
                    message: '',
                    error: 'Something went wrong. Please try again.'
                })
            }
        }else{
            setAlert({
                success: false,
                message: '',
                error: 'Please fill the forms with your info correctly.'
            })
        }
    }

    return (
        <section>
            <div className="container-fluid">
                <div className="row getInvolve-hero-box text-start">
                    <h1 style={{margin:'auto 17%'}}>Thank you for becoming <br /> a Partner of artcom</h1>
                </div>
                <div style={{padding:'50px 0'}} className="row">
                    <div className="patrner-form-container col-md-8 shadow">
                        <div className="partner-form-title">
                            <h4>Partner Application Form</h4>
                            <span>Tell us about you and your company</span>
                        </div>
                        <form className="partner-form">
                            <div className="patrner-form-fullWidth">
                                <label htmlFor="name">Name *</label><br />
                                <input 
                                    type="text" 
                                    name="name"
                                    value={partnerInfo.name}
                                    onChange={handlePartnerChange}
                                    required />
                            </div>
                            <div className='patrner-form-fullWidth'>
                                <label htmlFor="email">Email *</label><br />
                                <input 
                                    type="email" 
                                    name='email' 
                                    value={partnerInfo.email}
                                    onChange={handlePartnerChange}
                                    required />
                            </div>
                            <div className='patrner-form-halWidth groupInput'>
                                <div className="patrner-form-phone">
                                    <label htmlFor="phone">Phone *</label><br />
                                    <div>
                                        <input 
                                            type="number" 
                                            name='areaCode' 
                                            value={partnerInfo.areaCode}
                                            onChange={handlePartnerChange}
                                            required /><br />
                                        <span>Area Code</span>
                                    </div>
                                    <div>
                                        <input 
                                            type="number"
                                            name='phone'
                                            value={partnerInfo.phone}
                                            onChange={handlePartnerChange}
                                            required /><br />
                                        <span>Phone Number</span>
                                    </div>
                                </div>
                                <div className='patrner-form-hearAboutUs'>
                                    <label htmlFor="hearFromUs">How did you hear about us? *</label><br />
                                    <input 
                                        type="text" 
                                        name='hearAboutUs'
                                        value={partnerInfo.hearAboutUs} 
                                        onChange={handlePartnerChange}
                                        required />
                                </div>
                            </div>
                            <hr />
                            <span>Company Information</span>
                            <div className='patrner-form-fullWidth'>
                                <label htmlFor="companyName">Company Name *</label><br />
                                <input 
                                    type="text" 
                                    name='companyName' 
                                    value={partnerInfo.companyName}
                                    onChange={handlePartnerChange}
                                    required />
                            </div>
                            <div className='patrner-form-halWidth'>
                                <label htmlFor="companyType">Types of Business *</label><br />
                                <input 
                                    type="text" 
                                    name='companyType' 
                                    value={partnerInfo.companyType}
                                    onChange={handlePartnerChange}
                                    required />
                            </div>
                            <div className='patrner-form-fullWidth'>
                                <label htmlFor="address">Address</label><br />
                                <div>
                                    <input 
                                        type="text" 
                                        name='streetAddress'
                                        value={partnerInfo.streetAddress}
                                        onChange={handlePartnerChange} /><br />
                                    <span>Street Address</span>
                                </div>
                                <div>
                                    <input 
                                        type="text" 
                                        name='addressLine2'
                                        value={partnerInfo.addressLine2}
                                        onChange={handlePartnerChange} /><br />
                                    <span>Address Line 2</span>
                                </div>
                                <div>
                                    <input 
                                        type="text" 
                                        name='city'
                                        value={partnerInfo.city}
                                        onChange={handlePartnerChange} /><br />
                                    <span>City</span>
                                </div>
                                <div>
                                    <input 
                                        type="text" 
                                        name='postal'
                                        value={partnerInfo.postal}
                                        onChange={handlePartnerChange} /><br />
                                    <span>Postal/ Zip Code</span>
                                </div>
                            </div>
                            <div className='patrner-form-fullWidth'>
                                <label htmlFor="website">Website</label><br />
                                <input 
                                    type="text" 
                                    name='website'
                                    value={partnerInfo.website}
                                    onChange={handlePartnerChange} /><br />
                                <span>https://www.example.com</span>
                            </div>
                            <div className="terms">
                                <span>Terms and Condition</span><br />
                                <div>
                                    <input onClick={()=>setTerm1(!term1)} type="checkbox" name="terms1" id="" />
                                    <label htmlFor="terms1">lorem ipsum lorem ipsum</label>
                                </div>
                                <div>
                                    <input onClick={()=>setTerm2(!term2)} type="checkbox" name="terms1" id="" />
                                    <label htmlFor="terms1">lorem ipsum lorem ipsum</label>
                                </div>
                                <div>
                                    <input onClick={()=>setTerm3(!term3)} type="checkbox" name="terms1" id="" />
                                    <label htmlFor="terms1">lorem ipsum lorem ipsum</label>
                                </div>
                            </div>
                            {alert.success ? <p><strong style={{color:'green'}}>{alert.message}</strong></p> : <p><strong style={{color:'red'}}>{alert.error}</strong></p>}
                            <input onClick={handlePartnerSubmit} className='shadow-sm' type="submit" value="Submit Info" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;