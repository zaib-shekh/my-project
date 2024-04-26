import React from 'react';
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/heroimg2'
import Footer from '../components/footer'
import Form from '../components/Form';
const Contacts = () => {
  return (
    <>
    <Navbar/>
    <HeroImg2 heading='Contact us' text='With the contact given below'/>
    <Form/>
    <Footer/>
    </>
  )
}

export default Contacts;