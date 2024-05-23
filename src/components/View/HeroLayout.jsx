import { Box, Container, styled } from "@mui/material";


const HeroLayoutRoot = styled('section')(({
    theme
}) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
}));

const Background = styled('div')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
});

function HeroLayout(props) {
    const { sxBackground, children} = props;

    return (
        <HeroLayoutRoot>
            <Container
                sx={{
                    mt: 3,
                    mb: 14,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {children}
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: '#000',
                        opacity: 0.3,
                        zIndex: -1,
                    }} 
                />
                <Background sx={sxBackground} />
            </Container>
        </HeroLayoutRoot>
    )

}
export default HeroLayout;