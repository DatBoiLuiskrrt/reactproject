import React from "react";
import styled from 'styled-components'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  
  
  
`
const NavHeader = styled.div`
  border: 1px solid black;
  
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

  }
`
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  font-family: American;
`
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  svg {
    margin-right: 20px;
  }
  @media (max-width: 500px) {
    flex-direction: column;

  }
`
const MenuLink = styled.a`
text-decoration: none;
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