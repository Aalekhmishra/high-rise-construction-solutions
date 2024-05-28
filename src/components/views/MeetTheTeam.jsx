import React from 'react';

import JunedImage from "../../assets/Gallery/team_members/juned_qazi.jpg"; 
import DavidImage from "../../assets/Gallery/team_members/david_lim.jpg";
import AdnanImage from "../../assets/Gallery/team_members/adnan_aziz.jpg";
import NensiImage from "../../assets/Gallery/team_members/nensi_sukhadia.jpeg";
import AnthonyImage from "../../assets/Gallery/team_members/anthony_derogatis.jpeg";
import MariusImage from "../../assets/Gallery/team_members/marius_mazur.jpg";
import SloanImage from "../../assets/Gallery/team_members/sloan_delfi.jpg";
import DevinderImage from "../../assets/Gallery/team_members/devinder_singh.jpg";
import AnmolImage from "../../assets/Gallery/team_members/anmol_pant.jpg";
import LloydImage from "../../assets/Gallery/team_members/lloyd_durgadeen.jpg";
import JimImage from "../../assets/Gallery/team_members/jim_lyden.jpg";
import FaizanImage from "../../assets/Gallery/team_members/faizan_ahmed.jpg";
import SantoImage from "../../assets/Gallery/team_members/santo_guinta.jpg";
import LavaImage from "../../assets/Gallery/team_members/lava_kumar.jpg";
import SunnanImage from "../../assets/Gallery/team_members/sunnan_siddique.jpg";
import KennetImage from "../../assets/Gallery/team_members/kennet_sisk.jpg";
import ShashidharImage from "../../assets/Gallery/team_members/Shashidhar_bontha.jpg";
import LuisImage from "../../assets/Gallery/team_members/luis_hernandez.jpg";
import DanishImage from "../../assets/Gallery/team_members/danish_hassan.jpeg";
import CardUI from '../cards/Card';
import { Box, Stack, Typography } from '@mui/material';


const teamDataList = [
    {
        id: '1',
        name: 'Juned Qazi',
        jobDescription: 'Principal',
        imgUrl: JunedImage,
    },
    {
        id: '2',
        name: 'David Lim P.E',
        jobDescription: 'Project Executive',
        imgUrl: DavidImage
    },
    {
        id: '3',
        name: 'Adnan Aziz Mohammed',
        jobDescription: 'Finance Manager',
        imgUrl: AdnanImage
    },
    {
        id: '4',
        name: 'Nensi Sukhadia',
        jobDescription: 'Accountant',
        imgUrl: NensiImage,
    },
    {
        id: '5',
        name: 'Anthony DeRogatis',
        jobDescription: 'Advisor',
        imgUrl: AnthonyImage,
    },
    {
        id: '6',
        name: 'Marius Mazur',
        jobDescription: 'Senior Project Manager',
        imgUrl: MariusImage,
    },
    {
        id: '7',
        name: 'Sloan Delfi',
        jobDescription: 'Project Manager',
        imgUrl: SloanImage,
    },
    {
        id: '8',
        name: 'Devinder Singh',
        jobDescription: 'Project Manager',
        imgUrl: DevinderImage,
    },
    {
        id: '9',
        name: 'Anmol Pant',
        jobDescription: 'Project Manager',
        imgUrl: AnmolImage,
    },
    {
        id: '10',
        name: 'Lloyd Durgadeen',
        jobDescription: 'Construction Superintendent',
        imgUrl: LloydImage,
    },
    {
        id: '11',
        name: 'Jim Lyden',
        jobDescription: 'Construction Superintendent',
        imgUrl: JimImage,
    },
    {
        id: '12',
        name: 'Faizan Ahmed',
        jobDescription: 'Assistant Project Manager',
        imgUrl: FaizanImage,
    },
    {
        id: '13',
        name: 'Santo Guinta',
        jobDescription: 'Assistant Project Manager',
        imgUrl: SantoImage,
    },
    {
        id: '14',
        name: 'Lava Kumar',
        jobDescription: 'Assistant Project Manager',
        imgUrl: LavaImage
    },
    {
        id: '15',
        name: 'Sunnan Siddique',
        jobDescription: 'Assistant Project Manager',
        imgUrl: SunnanImage
    },
    {
        id: '16',
        name: 'Kenneth Sisk',
        jobDescription: 'Assistant Project Manager',
        imgUrl: KennetImage
    },
    {
        id: '17',
        name: 'Shashidhar Bontha',
        jobDescription: 'Assistant Project Manager',
        imgUrl: ShashidharImage
    },
    {
        id: '18',
        name: 'Luis Hernandez',
        jobDescription: 'Assistant Construction Superintendent',
        imgUrl: LuisImage
    },
    {
        id: '19',
        name: 'Danish Hassan',
        jobDescription: 'Assistant Construction Superintendent',
        imgUrl: DanishImage
    },
]
const MeetTheTeam = () => {
  return (
  <Box component="section" sx={{ p: "60px 30px" }}>
    <Typography gutterBottom variant="h3" component="div" margin={5} align='center' height={60}>
        Meet the Team
    </Typography>
    <Stack 
        direction="row" 
        useFlexGap 
        flexWrap="wrap"
        alignItems={"center"}
        justifyContent={"center"}
        spacing={8}
        sx={{ width: '100%'}}
    >
        
      {
        teamDataList.map((teamMemberInfo)=>(
        <CardUI 
            key={teamMemberInfo.id}
            id={teamMemberInfo.id}
            name={teamMemberInfo.name}
            description={teamMemberInfo.jobDescription}
            imageUrl={teamMemberInfo.imgUrl}
        />
    ))
      }
    </Stack>
    </Box>
  )
}

export default MeetTheTeam;
