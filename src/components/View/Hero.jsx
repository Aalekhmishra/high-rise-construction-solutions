import { Typography, useTheme } from "@mui/material";
import HeroLayout from "./HeroLayout";


export default function Hero(props) {
    const theme = useTheme();

    return (
        <HeroLayout 
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
                High Rise Construction Solutions
            </Typography>
            <Typography 
                color={"#FFF"} 
                align="center" 
                variant="h5"
                sx={{
                    mb: 4, mt: { xs: 4, sm: 10 }
                }}
            >
                Serving the Metropolitan area since 2018
            </Typography>
        </HeroLayout>
    )
}