import React from 'react';
import "./Projects.css"
import PageLayout from '../components/PageLayout';
import CareerHero from '../components/View/CareerHero';

import companyImage from "../assets/Gallery/Highrise+Logo+color+large.jpg"
// import groupImage from '../assets/Gallery/teamhrcs.png'
function  Careers() {

  return (
    <div>
         <CareerHero image_url={companyImage} />  
    </div>
  );
}

export default PageLayout()(Careers);
