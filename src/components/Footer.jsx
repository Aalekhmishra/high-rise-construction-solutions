import { Box, Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";
import Map from "./Map";

const Item = styled(Paper)(({theme})=>({
    display: "flex",
    flexDirection: 'column',
    color: theme.palette.text.secondary,
    border: 'none',
    boxShadow: 'none',
}))

export function  Footer(){
    return (
        <>
            <Box sx={{ flexGrow: 1, padding: { xs: '5px', md: '40px 20px'}}}>
                <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, md:12}}>
                    <Grid item xs={4}>
                        <Item sx={{height: {xs: '100%', md: '20rem'}, }}>
                            <Typography variant="h4" color={'black'}>Address</Typography>
                            <Typography variant="body2" color={'text.secondary'}> 634 Summit Ave 2nd Floor</Typography>
                            <Typography variant="body2" color={'text.secondary'}> Jersey City, NJ 07306</Typography>

                            <Typography variant="h4" color={'black'}>Phone</Typography>
                            <Typography variant="body2" color={'text.secondary'}>(973) 352-1785</Typography>

                            <Typography variant="h4" color={'black'}>Email</Typography>
                            <Typography variant="body2" color={'text.secondary'}>Office@hill21construction.com</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{height: {xs: '100%', md: '20rem'}, }}>
                            <Map />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{height: {xs: '100%', md: '20rem'}, }}>
                            <Typography variant="h4" color={'black'}>Office Hours</Typography>
                            <Typography variant="body2" color={'text.secondary'}>Monday-Friday</Typography>
                            <Typography variant="body2" color={'text.secondary'}> 8 AM - 4 PM</Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            {/* <h3>Address</h3>
            <div></div>
            <h3>Phone</h3>
            <div>(973) 352-1785</div>
            <h3>Email</h3>
            <div>Office@hill21construction.com</div>
            <h3>Office Hours</h3>
            <div></div> */}
        </>   
    )
}
