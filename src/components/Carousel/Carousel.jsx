import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { Box, IconButton } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import ImageUrl1 from "../../assets/Gallery/Slider/image_1.jpg";
import ImageUrl2 from "../../assets/Gallery/Slider/image_2.jpg";
import ImageUrl3 from "../../assets/Gallery/Slider/image_3.jpg";
import ImageUrl4 from "../../assets/Gallery/Slider/image_4.jpg";
import ImageUrl5 from "../../assets/Gallery/Slider/image_5.jpg";
import ImageUrl6 from "../../assets/Gallery/Slider/image_6.jpg";
import ImageUrl7 from "../../assets/Gallery/Slider/image_7.jpg";
import ImageUrl8 from "../../assets/Gallery/Slider/image_8.jpeg";
import ImageUrl9 from "../../assets/Gallery/Slider/image_9.jpeg";
import ImageUrl10 from "../../assets/Gallery/Slider/image_10.jpeg";
import ImageUrl11 from "../../assets/Gallery/Slider/image_11.jpg";
import ImageUrl12 from "../../assets/Gallery/Slider/image_12.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
    {url: ImageUrl1,},
    {url: ImageUrl2,},
    {url: ImageUrl3,},
    {url: ImageUrl4,},
    {url: ImageUrl5,},
    {url: ImageUrl6,},
    {url: ImageUrl7,},
    {url: ImageUrl8,},
    {url: ImageUrl9,},
    {url: ImageUrl10,},
    {url: ImageUrl11,},
    {url: ImageUrl12,},
];
const Slider = () => {
    const CustomRight = ({ onClick }) => (
        <IconButton
            onClick={onClick}
            sx={{ 
                color: 'red',
                background: "transparent",
                border: 0,
                position: 'absolute',
                bottom: 0,
                left: 0,
            }}
        >
            <WestIcon fontSize="small" />
        </IconButton>
      );
    const CustomLeft = ({ onClick }) => (
        <IconButton
            sx={{
                transform: 'rotate(180deg)', // Rotates the icon by 45 degrees
                transition: 'transform 0.3s ease-in-out', // Smooth transition
                color: 'red',
                background: "transparent",
                border: 0,
                position: 'absolute',
                bottom: 0,
                left: 40,
            }}
            onClick={onClick}
        >
                <WestIcon fontSize="small" />
            </IconButton>
      );
  return (
    <Box sx={{px: 5}}>
        <Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={false}
            showDots={false}
            infinite={true}
            partialVisible={false}
            customRightArrow={<CustomRight />}
            customLeftArrow={<CustomLeft />}
        >
            {sliderImageUrl.map((imageUrl, index) => {
                return (
                    <div className="slider" key={index}>
                        <img style={{width: '100%', height: '280px'}} src={imageUrl.url} alt={`slider-${imageUrl.url}`} />
                    </div>
                );
            })}
        </Carousel>
    </Box>
  );
};
export default Slider;
