import React from "react";
import styled from 'styled-components'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  @media (max-width: 500px) {
    background: linear-gradient(to right, #2193b0, #6dd5ed);
  }
`
const NavHeader = styled.div`
  // border: 1px solid black;
  display: flex;
  justify-content: space-between;
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 500px) {
    flex-direction: column;
    // border: 1px dotted black;
    width: 100%;
  }
`
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  font-family: American;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left:0px;
    margin-left: 0px;
    
    width:100%;
  }
`
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  svg {
    margin-right: 20px;
  }

`
const MenuLink = styled.a`
text-decoration: none;
@media (max-width: 500px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  
}
`

function Header () {
  return (
    <Nav>
      <NavHeader>
        
        <NavLeft>My Portfolio</NavLeft>

        

        <NavRight>
          
          <MenuLink href="https://www.linkedin.com/in/datboiluiskrrt/" target="_blank">
            <LinkedInIcon/>
          </MenuLink>
          
          

          <MenuLink href="https://github.com/DatBoiLuiskrrt"
          target="_blank">
            <GitHubIcon/>
          </MenuLink>

          <MenuLink href="#">
            Resume
          </MenuLink>
          
        </NavRight>

      </NavHeader>
    </Nav>
  )
}

export default Header;