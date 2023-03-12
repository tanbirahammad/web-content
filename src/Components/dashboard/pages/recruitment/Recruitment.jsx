import React, { useState } from 'react';
import recruitement from './recruitment.css';
import img from '../../../../images/icons/job-icon.png';

const Recruitment = () => {

    const [toggleState, setToggleState] = useState('seeAll');

    const handleToggleRecruitment = (e) => {
        setToggleState(e.target.value)
    }

    return (
        <div id='job-recruitment' className="row">
            <h4>Job Offers</h4>
            <div className="tender-toggle-box">
                <button onClick={handleToggleRecruitment} value='seeAll' className="btn btn-outline-dark">See All Recruitment</button>
                <input style={{width:'50%'}} type="text" className='form-control' placeholder='Search...' />
                <button onClick={handleToggleRecruitment} value='newRecruit' className="btn btn-outline-dark" >Create New Recruitment</button>
            </div>
            {toggleState === 'seeAll' && <div className="tender-list-container">
                <div className="tender-list shadow-sm">
                    <img src={img} alt="" />
                    <h6>hhhhhhhhh</h6>
                    <div className="tender-list-button">
                        <button className='btn btn-info'>Edit</button>
                        <button className='btn btn-danger'><i className="bi bi-x-circle"></i></button>
                    </div>
                </div>
            </div>}
            {toggleState === 'newRecruit' && <div className='toogle-newTender-container shadow-sm'>
                <h4>Create new Recruitment</h4>
                <form>
                    <label className='form-label' htmlFor="title">Title</label>
                    <input className='form-control bg-grey' type="text" name='title' />
                    <br />
                    <label className='form-label' htmlFor="formFile">Choose an image</label>
                    <input className="form-control bg-grey" type="file" name="formFile"></input>
                    <br />
                    <label htmlFor="body">Tender body</label>
                    <textarea name="body" className='form-control bg-grey'></textarea>
                    <br />
                    <input className='btn btn-dark' type="submit" value="Create" />
                </form>
            </div>}
        </div>
    );
};

export default Recruitment;