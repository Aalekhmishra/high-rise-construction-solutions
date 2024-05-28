import React from 'react';
import "./Services.css"
import { useTheme, Paper, Typography, Container, Box, Stack, Grid, Button } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';

import ConstructionImage from "../assets/Gallery/services/construction.jpg";
import PreConstructionImage from "../assets/Gallery/services/pre_construction.jpg";
import PageLayout from '../components/PageLayout';
import CustomCardServices from '../components/cards/services/CustomCardServices';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? "#000" : '#fff',
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  display: "flex", 
  flexDirection: 'column',
  color: theme.palette.text.secondary,
  border: 'none',
  boxShadow: "none",
}));

function Services() {
  const theme = useTheme();
  return (
      <>
        <Box sx={{ flexGrow: 1, padding: {xs: '5px', md: '40px 20px'} }}>
          <Typography variant="h3" color={theme.palette.mode === 'light' ? "#000": "#fff"} sx={{fontSize: "700"}} align='center' mb={5}>Our Services</Typography>
                <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4}>
                        <Item sx={{ height: {xs: '100%', md: '20rem' }, p:3 }} align={'center'}>
                            <Typography variant="h4" color={theme.palette.mode === 'light' ? "#000": "#fff"} sx={{fontSize: "700"}}>HRCS Specialties</Typography>
                            <Typography variant="subtitle2" color="text.secondary" margin={2}> Project Estimation</Typography>
                            <Typography variant="subtitle2" color="text.secondary" margin={2}>Construction Management & Site Supervision</Typography>
                            <Typography variant="subtitle2" color="text.secondary" margin={2}>Ground Up Construction for Residential & Commercial</Typography>
                            <Typography variant="subtitle2" color="text.secondary" margin={2}>Renovations, Additions, Demolitions</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Item sx={{ height: {xs: '100%', md: '20rem' }, p:3  }} align={'center'}>
                            <Typography variant="h4" color={theme.palette.mode === 'light' ? "#000": "#fff"} sx={{fontSize: "700"}}>What We Provide</Typography>
                            <Typography variant="subtitle2" color="text.secondary" margin={2}>Townhouses</Typography>
                            <Typography variant="subtitle2" color="text.secondary" margin={2}>Retail Developments</Typography>
                            <Typography variant="subtitle2" color="text.secondary" margin={2}>Custom Interiors</Typography>
                            <Typography variant="subtitle2" color="text.secondary" margin={2}>Special Projects</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Item sx={{ height: {xs: '100%', md: '20rem' }, p:3 }} align={'center'}>
                            <Typography variant="h4" color={theme.palette.mode === 'light' ? "#000": "#fff"}>Areas We Service</Typography>
                            <Typography variant="subtitle2" color="text.secondary" margin={2}>New Jersey </Typography>
                            <Typography variant="subtitle2" color="text.secondary" margin={2}>New York</Typography>
                            <Typography variant="subtitle2" color="text.secondary" margin={2}>Massachusetts</Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <CustomCardServices
              title={"Pre-Construction Services:"}
              description={"Highrise Construction Solutions (HRCS) believes in the importance of properly evaluating a project’s design and construction details during the project’s early design development stage to allow for our providing “value-added” input to the project design team. By participating in early pre-construction meetings, HRCS will focus on identifying best construction practices, minimizing adverse scheduling details, attaining potential cost savings and more efficiently planning for project completion. HRCS’s pre-construction services include:"}
              listArray={['Conceptual Project Cost Estimating', 'Constructability Review', 'Coordination with Design Professionals / Value Engineering', 'Systems Feasibility Studies / Material and Labor Availability and Selection Reviews', 'Scheduling and Lead Time Study', ' Site Logistics, Site Safety and Planning Analysis']}
              image_url={PreConstructionImage}
              directionImage={'row-reverse'}
            />
            <CustomCardServices 
              title={"Construction Services:"} 
              description={"Highrise Construction Solutions (HRCS) entire team of project executives, project managers, estimators and purchasing agents, supported by our office administrators and accounting group, all actively participate in the day-to-day operations of the firm’s projects. In support of HRCS’s project activities, the firm’s experienced construction principals have organized a complement of internal practices and project reporting systems to track the complex array of development activities associated with each ongoing project. Each project underway at HRCS utilizes the latest technology to enable HRCS to track and report on the following project activities: "} 
              listArray={['Bid Review and Award', 'Trade Contract Management', 'Project Scheduling', 'Document Control', 'Cost Control & Reporting', 'Change Order Management', 'Quality Control & Quality Assurance', 'Site Safety and Risk Management ', ' Project Close-out & Punch-list']}
              image_url={ConstructionImage}
            />
      </>
  );
}

export default PageLayout()(Services);