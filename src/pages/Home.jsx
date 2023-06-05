import { React, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import NavBar from '../components/NavBar/NavBar'
import HeroSection from '../components/HeroSection/HeroSection'
import InfoSection from '../components/InfoSection/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        console.log(isOpen)
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
        </>
    )
}

export default Home