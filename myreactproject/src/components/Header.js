import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Styles from "../components/Image.module.css";


const Header = () =>{
  return (
    <div className={Styles.header}>
    <p className={Styles.home}>Home</p>
    <LinkedInIcon/>
    <GitHubIcon/>
    </div>
  )
}
export default Header;