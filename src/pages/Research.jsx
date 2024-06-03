import React from 'react';
import "./Research.css"
import PageLayout from '../components/PageLayout';
import { Typography, useTheme } from '@mui/material';



function Research() {
  const theme = useTheme();
  return (
    <>
     <Typography
      variant='h4'
      color={theme.palette.mode === 'light' ? "#000" : "#fff"}
      p={10}
      sx={{fontSize: '500', }}
      align='center'
     >
     Our efforts to develop efficient construction management systems 
     by leveraging modern LLM technology. 
     </Typography>
     <ResearchCardUI />
    </>
  );
}

export default PageLayout()(Research);