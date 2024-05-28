import React from 'react'
import { Grid } from '@mui/material';

import { Header } from './Header';
import { Footer } from './Footer';

const PageLayout = () => (WrappedComponent) => {
    //This is a higherOrder function
    return (props) => {
        
        return (
            <>
                {/* <Title title={"Chatme App"} /> */}
                <Header />
                <Grid 
                    container 
                    // height={"calc(100vh - 8rem)"}
                >
                    <Grid
                        item 
                        xs={12} 
                        sm={12}
                        md={12}
                        lg={12}
                        height={"100%"} 
                    >
                        <WrappedComponent {...props} />
                    </Grid>
                </Grid>
                
                <Footer />
            </>
        )
    }
}

export default PageLayout;
