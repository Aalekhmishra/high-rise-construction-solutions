import { Box } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import companyLogo from "../assets/Gallery/Highrise+Logo+color+large.jpg";
import JunedImage from "../assets/Gallery/juned.jpg";


const sliderImagesList = [
    {url: companyLogo},
    {url: JunedImage},
    {url: companyLogo},
    {url: JunedImage},
    {url: companyLogo},
    {url: JunedImage},
]

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 4,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: {max: 1023, min: 768},
        items: 3,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: {max: 767, min: 464},
        items: 1,
        slidesToSlide: 1,
    }
}
const Slider = () => {
  return (
    <Box sx={{px: {xs: 2, md: 5}}}>
        <Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={false}
            draggable={false}
            showDots={false}
            infinite={false}
            partialVisbile={false}
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
    </Box>
  )
}

export default Slider;