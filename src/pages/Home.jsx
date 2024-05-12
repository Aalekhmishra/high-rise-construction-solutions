/*Import react dependecies here*/
import React from 'react';
import  { useState } from 'react';
//import Button from '@mui/material/Button';

import "./Home.css"



/*Import Images here for the home page*/
import myImage from "../assets/Gallery/Screenshot+2023-05-12+111233.png"
import SecondImage from "../assets/Gallery/new-york-skyline-black-and-white-lucynakoch.jpg"
import image1 from "../assets/Gallery/IMG_076.jpg";
import image2 from "../assets/Gallery/IMG_3451.jpg";
import image3 from "../assets/Gallery/unnamed.jpg";
import image4 from "../assets/Gallery/IMG_4377.jpg";
import image5 from "../assets/Gallery/_DSC3041.jpg";
import image6 from "../assets/Gallery/IMG_8432.jpg";
import image7 from "../assets/Gallery/Highrise+Logo+color+large.jpg"
import PageLayout from '../components/PageLayout';
/* New Imports that i used and changes which are not working*/
//import About from "./About.jsx"; 
// import "./ImageWithTextOverlay.css"



function Home() {
//const [showAbout, setShowAbout]=useState(false);


  return (
    
   <div>
    {/* Logo for the site */}
    <img src={image7} alt="Image 7" /> 
      <h1>High Rise Construction Solutions</h1>
      <h2>Serving the Metropolitan area since 2018</h2>
      {/* /*Image of the New York Skyline view*/ }
      <img src={myImage} alt="Description of the image" />
      {/* Image of the team of HRCS */}
      <img src={SecondImage} alt="Description of the image" />
      <h3>About Us</h3>
      <p>We are Construction Company with over 25 years of experience in the Construction Management 
        and General Contracting domain. Our extensive experience, professionally skilled and eager staff and 
        our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring 
        the budget within set constraints. 
        HRCS collaborates with Developers, Architects, Designers, and Engineers to schedule 
        and put together all phases of the Construction Process and offer Construction Management 
        and Consulting Services for Residential and Commercial Construction projects including 
        but not limited to Ground-Up Construction, Design-Build, Remodels and Renovations, Period Restorations,
        Hardscape/ Landscape, and other specialty projects in the New York/ New Jersey Area. Our team is dedicated to the 
        highest standards of professionalism and client satisfaction</p>
         <div className="gallery-container">
         <div className="image-scroll">
        {/* Gallery Images */}
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
        <img src={image4} alt="Image 4" />
        <img src={image5} alt="Image 5" />
        <img src={image6} alt="Image 6" /> 
        {/* Add more images as needed */}
      </div>
    </div>
    </div>
  );
}

export default PageLayout()(Home);