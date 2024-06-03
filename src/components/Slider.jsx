import { Box, IconButton } from '@mui/material';
import React from 'react'
import companyLogo from "../assets/Gallery/Highrise+Logo+color+large.jpg";
import JunedImage from "../assets/Gallery/juned.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { West } from '@mui/icons-material';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const sliderImagesList = [
    {url: companyLogo},
    {url: JunedImage},
    {url: companyLogo},
    {url: JunedImage},
    {url: companyLogo},
    {url: JunedImage},
]


const Slider = () => {
  const CustomLeftButton = ({ onClick }) => (
    <IconButton
      sx={{
        color: 'red',
        background: "transparent",
        position: 'absolute',
        bottom: 0,
        left: 0,
      }}
      onClick={onClick}
    >
      <West />
    </IconButton>
  );
  const CustomRightButton = ({ onClick }) => (
    <IconButton
      sx={{
        transform: 'rotate(180deg)',
        transition: 'transform 0.3s ease-in-out', //smooth transition
        color: 'red',
        background: "transparent",
        position: 'absolute',
        bottom: 0,
        left: 40,
      }}
      onClick={onClick}
    >
      <West />
    </IconButton>
  );
  return (
    <Box sx={{px: {xs: 2, md: 5}}}>
        <Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={false}
            draggable={false}
            showDots={false}
            infinite={true}
            partialVisbile={false}
            customRightArrow={<CustomRightButton />}
            customLeftArrow={<CustomLeftButton />}
        >
            { sliderImagesList.map((image, index) => {
                return (
                    <div 
                        key={index} 
                    // sx={{overflow: 'hidden', padding: "2rem 0"}}
                        style={{overflow: 'hidden'}}
                    >
                        <img 
                            src={image.url}
                            alt={`slider-${image.url}`}
                            style={{width: '230px', height: '280px'}}
                        />
                    </div>
                )
            }) }
        </Carousel>
        {/* <Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>; */}
    </Box>
  )
}

export default Slider;