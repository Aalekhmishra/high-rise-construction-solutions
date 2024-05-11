import React from "react";
import { useNavigate } from "react-router-dom";
export function  Header(){
    const navigate = useNavigate()
    return (
        <div>Header File
        <Button variant="text">Home </Button>
        {/*Buttone For About*/ }
      <Button variant="text" onClick={() => navigate("/about")}>About</Button>
        {/*Buttone For Careers*/ }
      <Button variant="text">Careers</Button>
        {/*Buttone For Projects*/ }
      <Button variant="text">Projects</Button>
        {/*Buttone For Services*/ }
      <Button variant="text">Our Services</Button>
        {/*Buttone For Contact us*/ }
      <Button variant="text">Contact Us</Button>
        { /*Buttone For Research*/ }
      <Button variant="text">Research</Button>
        </div>
    )
}
