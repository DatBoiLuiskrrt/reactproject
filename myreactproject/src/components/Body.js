import React from "react";
import recipes from "../Images/recipess.png";
import covid from "../Images/covidOptimized.PNG";
import MailIcon from '@material-ui/icons/Mail';
import styled from "styled-components";
import HomeIcon from '@material-ui/icons/Home';
import Styles from "./Image.module.css";
import { Link, Router } from "react-router-dom";

const Footer = styled.div`
    display: flex;
    border: 1px solid black;
    justify-content: space-around;
    padding: 1em;
    position: fixed;
    bottom: 0;
    width: 100vw;
    background-color: lightblue;
`
const Body = () => {
  return (
      <div>
          

          
        <Footer>
            <a href={"/home"}>
             <HomeIcon className={Styles.home}/> 
            </a>
            
            <a href={""}>
            <MailIcon className={Styles.mail}/>
            </a>
        </Footer>
        
        
          
      </div>
      
  )
}


export default Body;
