import React, { useState, Fragment } from 'react'
import StayloGreen from './img/StayloGreen.svg'
import StayloWhite from './img/StayloWhite.svg'
import { Link } from 'react-router-dom'
import {
  Nav,
  NavContainer, 
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from './NavbarWhiteStyles';
import '../App.scss';
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
    if(window.scrollY >= 10){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
      <Fragment>
        <Nav className={colorChange ? 'navbar colorChangeWhite' : 'navbar'}>
            <NavContainer>
              <Link to='/'>
                <NavLogo>
                  <img src={StayloWhite} />
                </NavLogo>
              </Link>
              <MobileIcon>
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <Link to="/lodging">
                    <NavLinks>List</NavLinks>
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLinks href="#feature">Features</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">Recomendation</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">About</NavLinks>
                </NavItem>
                <NavItem style={{marginLeft:"200px"}}>
                  <NavLinks href="#">Sign Up</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">Login</NavLinks>
                </NavItem>
              </NavMenu>
          </NavContainer>
        </Nav>
      </Fragment>
    )
}
  
export default Navbar;