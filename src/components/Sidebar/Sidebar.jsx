import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon,
    SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" >About</SidebarLink>
                    <SidebarLink to="discover" >Discover</SidebarLink>
                    <SidebarLink to="services" >Services</SidebarLink>
                    <SidebarLink to="sign-up" >Sign Up</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/sign-in">
                        Sign In
                    </SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar