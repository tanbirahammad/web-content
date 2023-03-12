import React, { useState } from 'react';
import logo from '../../../images/Company-Logo_Top.png';
import ContactForm from '../pages/contact/Contact';
import PortfolioDash from '../pages/portfolio/Portfolio';
import Client from '../../dashboard/pages/client/Client';
import Gallery from '../../dashboard/pages/gallery/Gallery';
import Team from '../../dashboard/pages/team/Team';
import Partner from '../../dashboard/pages/partner/Partner';
import Recruitment from '../../dashboard/pages/recruitment/Recruitment';
import Etender from '../../dashboard/pages/e_tender/Etender';
import style from './home.css';

const HomeDash = () => {

    const [selectedNav, setSelectedNav] = useState('Mail');

    const handleDashNav = (e) => {
        const eventTagName = e.target.tagName;
        let clickedNav = '';
        let navGroup = '';
        if (eventTagName === 'LI') {
            navGroup = e.target.parentElement;
            clickedNav = e.target.children[1].innerText;
        }
        else{
            navGroup = e.target.parentElement.parentElement;
            clickedNav = e.target.parentElement.children[1].innerText;
        }
        for (let i = 0; i < navGroup.children.length; i++) {
            const list = navGroup.children[i];
            if (list.children[1].innerText === clickedNav) {
                list.className = 'list-group-item list-group-item-action active';
            }
            else{
                list.className = 'list-group-item list-group-item-action';
            }
        }
        setSelectedNav(clickedNav);
    }

    return (
        <section id='dashboard'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <div className="dash-header">
                            <div className="dash-logo">
                                <h2>Artistic Communication</h2>
                                <hr className="border opacity-100" />
                            </div>
                            <div className="dash-sidebar">
                                <ul className="list-group">
                                    <li onClick={handleDashNav} className="list-group-item list-group-item-action"><i className="bi bi-envelope"></i>  <span>Mail</span></li>
                                    <li onClick={handleDashNav} className="list-group-item list-group-item-action"><i className="bi bi-card-text"></i>  <span>Portfolio</span></li>
                                    <li onClick={handleDashNav} className="list-group-item list-group-item-action"><i className="bi bi-people"></i>  <span>Clients</span></li>
                                    <li onClick={handleDashNav} className="list-group-item list-group-item-action"><i className="bi bi-microsoft-teams"></i>  <span>Team</span></li>
                                    <li onClick={handleDashNav} className="list-group-item list-group-item-action"><i className="bi bi-images"></i>  <span>Gallery</span></li>
                                    <li onClick={handleDashNav} className="list-group-item list-group-item-action"><i className="bi bi-person-badge"></i>  <span>Partner</span></li>
                                    <li onClick={handleDashNav} className="list-group-item list-group-item-action"><i className="bi bi-newspaper"></i>  <span>Job Recruitment</span></li>
                                    <li onClick={handleDashNav} className="list-group-item "><i className="bi bi-cash-stack"></i>  <span>E-tender</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div data-bs-spy="scroll" className="col-md-8">
                        {selectedNav === 'Mail' && <ContactForm />}
                        {selectedNav === 'Portfolio' && <PortfolioDash />}
                        {selectedNav === 'Clients' && <Client />}
                        {selectedNav === 'Gallery' && <Gallery />}
                        {selectedNav === 'Team' && <Team />}
                        {selectedNav === 'Partner' && <Partner/>}
                        {selectedNav === 'Job Recruitment' && <Recruitment/>}
                        {selectedNav === 'E-tender' && <Etender/>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeDash;