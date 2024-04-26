import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import HeroImg2 from '../components/heroimg2';
import PricingCards from '../components/PricingCards'
import Work from '../components/work'
const Project = () => {
  return (
    <>
    <Navbar/>
    <HeroImg2 heading='PROJECTS.' text='Some of my most recent works.'/>
    <Work/>
    <PricingCards/>
    <Footer/>
    </>
  )
}

export default Project;