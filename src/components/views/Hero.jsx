import * as React from 'react';
import Typography from '../Typography';
import HeroLayout from './HeroLayout';

export default function Hero(props) {
  return (
    <HeroLayout
        sxBackground={{
            backgroundImage: `url(${props.image_url})`,
            backgroundColor: '#7fc7d9', // Average color of the background image.
            backgroundPosition: 'center',
        }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={props.image_url}
        alt="Hero image"
      />
        <Typography color="inherit" align="center" variant="h2" marked="center">
            High Rise Construction Solutions
        </Typography>
        <Typography
            color="inherit"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
        >
            Serving the Metropolitan area since 2018
        </Typography>
    </HeroLayout>
  );
}