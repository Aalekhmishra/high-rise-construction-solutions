import { Typography, useTheme } from "@mui/material";
import CareerHeroLayout from "./CareerHeroLayout";



export default function CareerHero(props) {
    const theme = useTheme();

    return (
        <CareerHeroLayout 
            sxBackground={{
                backgroundImage: `url(${props.image_url})`,
                backgroundColor: "#7fc7d9",
                backgroundPosition: 'center',
            }}
        >
            <Typography 
                color={'#FFF'}
                align="center" 
                variant="h2" 
            >
                Want to join the team?
            </Typography>
            <Typography 
                color={"#FFF"} 
                align="center" 
                variant="h5"
                sx={{
                    mb: 4, mt: { xs: 4, sm: 10 }
                }}
            >   HRCS is always looking for candidates who are mission-focused, 
                career driven and looking to make a career within the construction industry. 
                Want to join a company where you can see your hard work rise. 
                Please submit your resume to hr@hill21construction.com and in subject line 
                state “interested candidate from website”. 
            </Typography>
        </CareerHeroLayout>
    )
}