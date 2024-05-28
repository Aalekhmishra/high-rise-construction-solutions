import React from 'react';
import "./About.css"
import PageLayout from '../components/PageLayout';
import MeetTheTeam from '../components/views/MeetTheTeam';
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const whoWeAreData = [
  'Ground-Up Construction',
  'Design-Build',
  'Remodels and Renovations',
  'Period Restorations',
  'Hardscape/ Landscape',
  'Other specialty projects in the New York/ New Jersey Area.',
];
const missionData = [
  'Providing high quality workmanship and customer service.',
  'Maintaining professionalism and honesty in our relationships with clients, vendors and subcontractors.',
  'Critically applying sound project management principles to coordinate day to day activities.',
  'Bringing experienced subcontractors to each project with a shared goal of delivering work ahead of schedule and under budget.',
  'Creating a safe and productive work environment. satisfaction.',
];
function About() {
  return (
    <div>
      <Box component="section" sx={{ p: "60px 30px" }}>
          <Typography gutterBottom variant="h3" component="div" margin={5} align='left' height={60}>
            Who We Are
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" fontSize={18} sx={{ p: "10px 80px" }}>
              Highrise Construction Solutions Inc. is a Construction Company with over 25 years of experience in the Construction Management and General Contracting domain. Our extensive experience, professionally skilled and eager staff and our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring the budget within set constraints. HRCS collaborates with Homeowners, Developers, Architects, Designers, and Engineers to schedule and put together all phases of the Construction Process. Our team is dedicated to the highest standards of professionalism and client satisfaction. We offer Construction Management and Consulting Services for Residential and Commercial Construction projects; including but not limited to:
          </Typography>
          <List sx={{ width: {xs: '100%', md:'80%'}, p: "10px 120px", bgcolor: 'background.paper' }}>
            {whoWeAreData.map((value) => (
              <ListItem
                key={value}
                disableGutters
              >
                <ListItemIcon >
                  <CircleIcon fontSize='3'/>
                </ListItemIcon>

                <ListItemText primary={`${value}`} />
              </ListItem>
            ))}
          </List>
      </Box>

        <Box component="section" sx={{ p: "60px 30px" }}>
          <Typography gutterBottom variant="h3" component="div" margin={5} align='left' height={60}>
            Our Mission
          </Typography>

          <List sx={{ width: {xs: '100%', md:'80%'}, p: "10px 80px", bgcolor: 'background.paper' }}>
            {missionData.map((value) => (
              <ListItem
                key={value}
                disableGutters
              >
                <ListItemIcon >
                  <CircleIcon fontSize='3'/>
                </ListItemIcon>

                <ListItemText primary={`${value}`} />
              </ListItem>
            ))}
          </List>
      </Box>
      
      <MeetTheTeam />
    </div>
  );
}

export default PageLayout()(About);