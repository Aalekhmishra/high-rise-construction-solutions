import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'

const ResearchCardUI = (props) => {
  return (
    <Container
        component={"section"}
        maxWidth={false}
        sx={{
            pt: 10,
            pb: 10,
            height: '100%',
            maxWidth: '100%',
        }}
    >
        <Grid 
            container
            columns={{xs: 6, md: 12}}
            sx={{ height: '100%'}}
            direction={props.directionImage || 'row'}
        >
            <Grid
                 item
                 xs={12} md={6}
                 sx={{
                    zIndex: 1
                 }}
            >
                <Box sx={{p: 5}}>
                    <Typography variant='h3' component={'h3'} gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography variant='subtitle1'>
                        {props.description}
                    </Typography>
                </Box>
            </Grid>
            <Grid
                item
                xs={12} md={6}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    overflow: { md: 'hidden' }
                }}
            >
                <Box 
                    component={"img"}
                    src={props.image_url}
                    alt='Team Image'
                    sx={{
                        width: '100%'
                    }}
                />
            </Grid>
        </Grid>
    </Container>
  )
}

export default ResearchCardUI