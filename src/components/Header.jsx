import { AppBar, Box, Button, IconButton, Menu, Toolbar, Link } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import companyLogo from "../assets/Gallery/Highrise+Logo+color+large.jpg"

const white = "#fff";

export function  Header(){
    const navigate = useNavigate()
    return (
      <>
        <Box height={"8rem"}>
          <AppBar position="static" sx={{ bgcolor: white}} >
            <Toolbar> 
              <img 
                src={companyLogo}
                className="logo "
                alt="Company logo"
              />
              <Box sx={{ display: { xs: "block", sm: "none"}}}>
                <IconButton color="inherit">
                  <Menu />
                </IconButton>
              </Box>
              <Box sx={{flexGrow: 1}} />
              <Box sx={{ display: "flex"}}>
                <NavItem title={"Home"} onclick={()=>navigate("/")} />
                <NavItem title={"About"} onclick={()=>navigate("/about")} />
                <NavItem title={"Projects"} onclick={()=>navigate("/projects")} />
                <NavItem title={"Careers"} onclick={()=>navigate("/careers")} />
                <NavItem title={"Our Services"} onclick={()=>navigate("/services")} />
                <NavItem title={"Research"} onclick={()=>navigate("/research")} />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>      
      </>
    )
}

const NavItem = ({ title, onclick }) => {
  return (
    <Link onClick={onclick} underline="hover" sx={{paddingX: "2rem", cursor: 'pointer'}}>{title}</Link>
  )
}


//   <div>Header File
//   <Button variant="text">Home </Button>
//   {/*Buttone For About*/ }
// <Button variant="text" onClick={() => navigate("/about")}>About</Button>
//   {/*Buttone For Careers*/ }
// <Button variant="text">Careers</Button>
//   {/*Buttone For Projects*/ }
// <Button variant="text">Projects</Button>
//   {/*Buttone For Services*/ }
// <Button variant="text">Our Services</Button>
//   {/*Buttone For Contact us*/ }
// <Button variant="text">Contact Us</Button>
//   { /*Buttone For Research*/ }
// <Button variant="text">Research</Button>
//   </div>