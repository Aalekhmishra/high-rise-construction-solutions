import { AppBar, Box, Button, IconButton, Toolbar, Link, Drawer } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import companyLogo from "../assets/Gallery/Highrise+Logo+color+large.jpg"
import { LinkedIn, Menu as MenuIcon } from "@mui/icons-material";

const white = "#fff";

export function  Header(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  console.log("isMobile", isMobileMenuOpen);
    const navigate = useNavigate();
    const handleMenuMobileOpen=()=>{
      setIsMobileMenuOpen(true);
    }
    const handleMenuMobileClose=()=>{
      setIsMobileMenuOpen(false)
    }
    return (
      <>
        <Box sx={{flexGrow: 1}} height={"8rem"}>
          <AppBar position="static" sx={{ bgcolor: white}} >
            <Toolbar> 
              <img 
                src={companyLogo}
                className="logo "
                alt="Company logo"
                sx={{
                  display: { xs: "none", md: "block"},
                }}
              />
              <Box sx={{flexGrow: 1}} />
              <Box sx={{ display: { xs: "block", sm: "block", md: 'none'}}}>
                <IconButton color="#000" bgcolor={'red'} onClick={handleMenuMobileOpen}>
                  <MenuIcon />
                </IconButton>
              </Box>
              {!isMobileMenuOpen && AllMenus(navigate)}
              
            </Toolbar>
          </AppBar>
              {
                <Drawer
                  open={isMobileMenuOpen}
                  onClose={handleMenuMobileClose}

                >
                  <Box
                    sx={{

                    }}
                  >
                    {allMenusForMobile(navigate)}
                  </Box>
                </Drawer>
              }
        </Box>      
      </>
    )
}

const NavItem = ({ title, onclick }) => {
  return (
    <Link onClick={onclick} underline="hover" sx={{paddingX: "2rem", cursor: 'pointer'}}>{title}</Link>
  )
}

const AllMenus = (navigate) =>{
  return (
    <Box 
      sx={{ 
        display: {xs: "none", md: 'flex'}, 
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        padding: "2rem"
      }}
    >
                <NavItem title={"Home"} onclick={()=>navigate("/")} />
                <NavItem title={"About"} onclick={()=>navigate("/about")} />
                <NavItem title={"Projects"} onclick={()=>navigate("/projects")} />
                <NavItem title={"Careers"} onclick={()=>navigate("/careers")} />
                <NavItem title={"Our Services"} onclick={()=>navigate("/services")} />
                <NavItem title={"Research"} onclick={()=>navigate("/research")} />
                <IconButton 
                  component="a" 
                  href="https://www.linkedin.com/company/highrise-construction-solutions/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="https://www.linkedin.com/company/highrise-construction-solutions/about/"
                  sx={{
                    margin: '0 10px',
                    color: '#000',
                    svg: {
                      fontSize: '3.5rem',
                    }
                  }}
                >
                    <LinkedIn  />
                </IconButton>
                <Button 
                  variant="contained" 
                  href="mailto:office@hill21construction.com"
                  sx={{
                    height: '60px',
                    bgcolor: 'black',
                  }}
                >Contact Us</Button>
              </Box>
  )
}

const allMenusForMobile = (navigate) =>{
  return (
    <Box 
      sx={{ 
        display: {xs: "flex", md: 'none'}, 
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        padding: ".5rem"
      }}
    >
                <NavItem title={"Home"} onclick={()=>navigate("/")} />
                <NavItem title={"About"} onclick={()=>navigate("/about")} />
                <NavItem title={"Projects"} onclick={()=>navigate("/projects")} />
                <NavItem title={"Careers"} onclick={()=>navigate("/careers")} />
                <NavItem title={"Our Services"} onclick={()=>navigate("/services")} />
                <NavItem title={"Research"} onclick={()=>navigate("/research")} />
                <IconButton 
                  component="a" 
                  href="https://www.linkedin.com/company/highrise-construction-solutions/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="https://www.linkedin.com/company/highrise-construction-solutions/about/"
                  sx={{
                    margin: '0 10px',
                    color: '#000',
                    svg: {
                      fontSize: '3.5rem',
                    }
                  }}
                >
                    <LinkedIn  />
                </IconButton>
                <Button 
                  variant="contained" 
                  href="mailto:office@hill21construction.com"
                  sx={{
                    height: '60px',
                    bgcolor: 'black',
                  }}
                >Contact Us</Button>
              </Box>
  )
}