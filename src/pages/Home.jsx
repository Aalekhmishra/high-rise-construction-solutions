/*Import react dependecies here*/
import React from 'react';

import "./Home.css"


import SecondImage from "../assets/Gallery/new-york-skyline-black-and-white-lucynakoch.jpg"
import PageLayout from '../components/PageLayout';
import Hero from '../components/View/Hero';
import Slider from '../components/Slider';
import HomeAboutCardUI from '../components/cards/HomeAboutCardUI';
import groupImage from '../assets/Gallery/teamhrcs.png'
/* New Imports that i used and changes which are not working*/



function Home() {
  
  return (
    
   <div>
      <Hero image_url={SecondImage}/>
      <Slider />
      <HomeAboutCardUI image_url={groupImage} />
      
    </div>
  );
}

export default PageLayout()(Home);