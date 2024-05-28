import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Drawer, IconButton, Link, Skeleton, Toolbar, styled, useTheme } from "@mui/material";
import { Close, DarkModeRounded, LightModeOutlined, LinkedIn, Menu } from "@mui/icons-material";
import companyLogo from "../assets/Gallery/logo4.png";
import { useThemeToggle } from "../ThemeProvider";
import HammerImage from '../assets/Gallery/hemmar4.png'

const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  ...theme.typography.subtitle2,
  padding: theme.spacing(1),
  transition: 'color 0.3s ease, background-color 0.3s ease',
}));

const Logo = styled('img')({
  height: 80,
  width: 120,
});

export function  Header(){
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const toggleTheme = useThemeToggle();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleMobileMenu = () => {
      setIsMobileMenuOpen(true);
    }
    const handleMobileMenuClose = () => {
      setIsMobileMenuOpen(false);
    }
    return (
      <> 
        <Box sx={{flexGrow: 1}} height={"8rem"}>
          <AppBar position='static' sx={{ bgcolor: theme.palette.mode === 'light' ? "#fff": "#000" }}>
            <Toolbar>
              <Logo 
                src={companyLogo} 
                alt="HighRise" sx={{
                  height: {xs: 50, md: 80},
                  width: {xs: 60, md: 100},
                }} 
                onClick={() => navigate("/")} 
              />
              <Box sx={{flexGrow: 1}} />
              <Box sx={{ display: { xs: "block", sm: "block", md: 'none'}}}>
                <IconButton color='#000' onClick={handleMobileMenu}>
                  <Menu />
                </IconButton>
              </Box>
              {!isMobileMenuOpen && AllMenus(navigate) }
              {isLoading ? <Skeleton /> : (
            <Drawer 
              open={isMobileMenuOpen} 
              onClose={handleMobileMenuClose}
              PaperProps={{
                sx: {
                    width: '50%',
                    maxHeight: '100vh', // ensures it takes full screen height if needed
                },
            }}
            >
               <Box
                sx={{
                    // width: '100%',
                    height: '100%', // ensure the content takes full height of the drawer
                    p: 2,
                }}
            >
              <Logo 
                src={companyLogo} 
                alt="HighRise" 
                sx={{
                  height: {xs: 50, md: 80},
                  width: {xs: 60, md: 100},
                }} 
                onClick={() => navigate("/")} 
              />
              <Box sx={{flexGrow: 1}} />
              <Box sx={{ display: { xs: "block", sm: "block", md: 'none'}}}>
                <IconButton onClick={toggleTheme} sx={{ position: 'absolute', top: 10, right: 70}}>
                  { theme.palette.mode === 'light' ?<DarkModeRounded /> : <LightModeOutlined /> }
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "block", sm: "block", md: 'none'}}}>
                <IconButton sx={{ position: 'absolute', top: 10, right: 10}} onClick={handleMobileMenuClose}>
                  <Close />
                </IconButton>
              </Box>
              
              {AllMenusForMobile(navigate) }
            </Box>   
            </Drawer>
          )}
            </Toolbar>
          </AppBar>
          
        </Box>
     </>
    )
}
const AllMenus = (navigate) => {
  const theme = useTheme();
  const toggleTheme = useThemeToggle();
  
  return (
    <Box sx={{display: { xs: 'none', sm: 'none', md:'flex'}, flexDirection: 'row', alignContent: "center", alignItems: "center", padding: "2rem"}}>
                <NavItem title={"Home"} onClick={() => navigate("/")} routeName={'/'} />
                <NavItem title={"About"} onClick={() => navigate("/about")} routeName={'/about'} />
                <NavItem title={"Projects"} onClick={() => navigate("/projects")} routeName={'/projects'} />
                <NavItem title={"Careers"} onClick={() => navigate("/careers")} routeName={'/careers'} />
                <NavItem title={"Our Services"} onClick={() => navigate("/services")} routeName={'/services'} />
                <NavItem title={"Research"} onClick={() => navigate("/research")} routeName={'/research'} />

                <IconButton onClick={toggleTheme}>
                  { theme.palette.mode === 'light' ?<DarkModeRounded /> : <LightModeOutlined /> }
                </IconButton>
                <IconButton
                    component="a"
                    href={"https://www.linkedin.com/company/highrise-construction-solutions/about/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"https://www.linkedin.com/company/highrise-construction-solutions/about/"}
                    sx={{
                        margin: '0 10px',
                        color: theme.palette.mode === 'light' ? "#000": "#fff",// Change the color of the icons
                        '&:hover': {
                            color: '#1976d2', // Change color on hover
                        },
                        svg: {
                          fontSize: '3.5rem' // Custom font sizesx
                        }
                    }}
                >
                  <LinkedIn />
                </IconButton>
                <Button 
                  variant="contained"  
                  href="mailto:office@hill21construction.com"  
                  sx={{
                    height: '60px',
                    bgcolor: "contained",
                    color: theme.palette.mode === 'light' ? "#000": "#fff",
                  }}
                >
                  Contact Us
                </Button>
              </Box>
  )
}
const AllMenusForMobile = (navigate) => {
  const theme = useTheme();
  const toggleTheme = useThemeToggle();
  return (
    <Box sx={{display: { xs: 'flex', md:'none'}, flexDirection: 'column', alignContent: "center", alignItems: "center", padding: ".5rem"}}>
      <NavItem title={"Home"} onClick={() => navigate("/")} />
      <NavItem title={"About"} onClick={() => navigate("/about")} />
      <NavItem title={"Projects"} onClick={() => navigate("/projects")} />
      <NavItem title={"Careers"} onClick={() => navigate("/careers")} />
      <NavItem title={"Our Services"} onClick={() => navigate("/services")} />
      <NavItem title={"Research"} onClick={() => navigate("/research")} />
                
                <IconButton
                    component="a"
                    href={"https://www.linkedin.com/company/highrise-construction-solutions/about/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"https://www.linkedin.com/company/highrise-construction-solutions/about/"}
                    sx={{
                        margin: '0 10px',
                        color: theme.palette.mode === 'light' ? "#000": "#fff",// Change the color of the icons
                        '&:hover': {
                            color: '#1976d2', // Change color on hover
                        },
                        svg: {
                          fontSize: '3.5rem' // Custom font size
                        }
                    }}
                >
                  <LinkedIn />
                </IconButton>
                <Button 
                  variant="contained" 
                  fullWidth 
                  href="mailto:office@hill21construction.com"  
                  sx={{
                    height: '60px',
                    bgcolor: 'contained',
                    color: theme.palette.mode === 'light' ? "#000": "#fff",
                  }}
                >
                  Contact Us
                </Button>
              </Box>
  )
}
const NavItem = ({ title, onClick, routeName }) => {
  const theme = useTheme();
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <CustomLink 
      onClick={onClick} 
      sx={{
        textDecoration: routeName === pathName ? 'underline' : 'none', 
        textUnderlineOffset: routeName === pathName ? '5px': 'none',
        cursor: `url(${HammerImage}), pointer`,
        // cursor: `url(${ConstructionIcon}), pointer`,
      }}  
    >{title}</CustomLink>   
  )
}