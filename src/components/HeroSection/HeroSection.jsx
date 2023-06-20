import { React, useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroHeader, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroSectionElements"
import { Button } from '../ButtonElements'
import Video from "../../assets/videos/video.mp4"

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroHeader>Virtual Banking Made Easy</HeroHeader>
                <HeroP>Sign up today and receive $250 in credit on your next purchase. </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="sign-up"
                        onMouseEnter={() => onHover()}
                        onMouseLeave={() => onHover()}
                        primary="true"
                        dark="true "
                    >Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;