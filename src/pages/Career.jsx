import React from 'react';

import HighriseImage from "../assets/Gallery/Highrise+Logo+color+large.jpg"
import PageLayout from '../components/PageLayout';
import CareerHero from '../components/views/CareerHero';



function Career() {
  return (  
    <div style={{height: "100%"}}>
      <CareerHero image_url={HighriseImage} />
    </div>
  );
}

export default PageLayout()(Career);