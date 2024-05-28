import React from 'react';
import "./Research.css"
import PageLayout from '../components/PageLayout';
import JunedImage from "../assets/Gallery/research/juned.jpg";
import SecondImage from "../assets/Gallery/research/secondImg.png";
import { Typography, useTheme } from '@mui/material';
import CustomCardResearch from '../components/cards/research/CustomCardResearch';

function Research() {
  const theme = useTheme();
  return (
   <>
   <Typography variant="h4" color={theme.palette.mode === 'light' ? "#000": "#fff"} p={10} sx={{fontSize: "500"}} align='center'>
   Our efforts to develop efficient construction management systems by leveraging modern LLM technology.
   </Typography>
      <CustomCardResearch
        title={""} 
        description={`The construction industry is known for its slow adaptation to the Industrial Revolution 4.0. This revolution refers to using AI techniques in the construction management process. However, it can be assumed that the development of such software will be introduced in the next decade because of the dramatic enhancement of AI systems. High Rise Construction Solutions tends to dedicate its effort to pushing the conventional boundaries of management systems. Our research showcases experimental outcomes of using large language models on construction drawings of various sizes. 

        Infrastructure development is a significant societal aspect involving manual and redundant tasks. As construction is a delicate process, the management team collaborates with multiple authorities, such as the municipal corporation, fire department, owners, stakeholders, and most notably, the design team. To ensure the process is followed based on the building codes specific to the location and specified by the Municipal Corporation guidelines, there is a constant interaction between the design team and the contractor. Unfortunately,  big projects have a greater scope for mistakes, and these contingencies must be addressed per the building codes. `} 
        image_url={JunedImage} 
      />
      <CustomCardResearch 
        title={""} 
        description={"The drawings and the sequence are updated regularly to ensure that after the project, the contractor can provide the owner with accurate drawings for the entire superstructure. Large Language Models can perform these redundant tasks with proper training, logic implementation, and prompt engineering methods. Through this research, High Rise Construction Solutions will attempt to dive into the cardinal aspects of construction automation using machine learning, RAG, Vector databases, and other available resources to deploy robust software for construction management. Generative AI has a huge potential to make redundant processes such as estimating take-offs, creating proposals, and tracking inventory."} 
        image_url={SecondImage} 
        directionImage={'row-reverse'}
      />
   </>
  );
}

export default PageLayout()(Research);