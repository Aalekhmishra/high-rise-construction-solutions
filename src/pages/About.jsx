import React from 'react';
import "./About.css"
import PageLayout from '../components/PageLayout';


function About() {
  return (
    <div>
      <h1 className='heading1'>About</h1>
      <h2 className='heading2'>Who We Are</h2>
      <p className='description1'>Highrise Construction Solutions Inc. is a Construction Company with over 25 years of experience in the Construction Management and General Contracting domain. Our extensive experience, professionally skilled and eager staff and our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring the budget within set constraints. HRCS collaborates with Homeowners, Developers, Architects, Designers, and Engineers to schedule and put together all phases of the Construction Process. Our team is dedicated to the highest standards of professionalism and client satisfaction. We offer Construction Management and Consulting Services for Residential and Commercial Construction projects; including but not limited to:

        Ground-Up Construction

        Design-Build

        Remodels and Renovations

        Period Restorations

        Hardscape/ Landscape

        Other specialty projects in the New York/ New Jersey Area.</p>
        <h2 className='heading3'>Our Mission</h2>
        <p className='description2'>• Providing high quality workmanship and customer service. 

           • Maintaining professionalism and honesty in our relationships with clients, vendors and subcontractors. 

           • Critically applying sound project management principles to coordinate day to day activities. 

           • Bringing experienced subcontractors to each project with a shared goal of delivering work ahead of schedule and under budget. 

           • Creating a safe and productive work environment. satisfaction.</p>

           <h2 className='heading3'>Meet the Team</h2>
           
    </div>
  );
}

export default PageLayout()(About);