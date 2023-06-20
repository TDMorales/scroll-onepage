import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="">How It Works</FooterLink>
                            <FooterLink to="">Testimonials</FooterLink>
                            <FooterLink to="">Careers</FooterLink>
                            <FooterLink to="">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="">Contact</FooterLink>
                            <FooterLink to="">Support</FooterLink>
                            <FooterLink to="">Destinations</FooterLink>
                            <FooterLink to="">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="">Submit Video</FooterLink>
                            <FooterLink to="">Ambassadors</FooterLink>
                            <FooterLink to="">Agency</FooterLink>
                            <FooterLink to="">Influencers</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="">Instagram</FooterLink>
                            <FooterLink to="">Facebook</FooterLink>
                            <FooterLink to="">YouTube</FooterLink>
                            <FooterLink to="">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer