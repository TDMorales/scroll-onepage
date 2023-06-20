import { React, Fragment } from 'react'
import {
    Nav,
    NavBarContainer,
    NavLogo,
    HamburgerMenu,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink
} from './NavBarElements'
import { FaBars } from 'react-icons/fa'

const NavBar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">dolla</NavLogo>
                    <HamburgerMenu onClick={toggle}>
                        <FaBars />
                    </HamburgerMenu>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="discover">Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="signup">Sign Up</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar