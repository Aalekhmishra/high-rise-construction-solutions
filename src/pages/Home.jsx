/*Import react dependecies here*/
import React from 'react';

/*Import Images here for the home page*/
import SecondImage from "../assets/Gallery/new-york-skyline-black-and-white-lucynakoch.jpg"
import groupImage from "../assets/Gallery/group_image.png";
import PageLayout from '../components/PageLayout';
import Hero from '../components/views/Hero';
import HomeAbout from '../components/views/HomeAbout';
import Slider from '../components/Carousel/Carousel';




function Home() {
  return (  
    <div style={{height: "100%"}}>
      <Hero image_url={SecondImage} />
      <Slider />
      <HomeAbout image_url={groupImage} />
    </div>
  );
}

export default PageLayout()(Home);