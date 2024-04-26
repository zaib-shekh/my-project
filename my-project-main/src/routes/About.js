import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import HeroImg2 from '../components/heroimg2';
import AboutContent from '../components/AboutContent';
const About = () => {
  return (
    <>
    <Navbar/>
    <HeroImg2 heading='The Truth' text='This Instagram page will touch your soul'/>
    <AboutContent/>
    <Footer/>
    </>
  )
}

export default About