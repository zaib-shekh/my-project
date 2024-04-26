import './AboutContent.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../assets/react1.png'
import Img2 from '../assets/react2.webp'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>Im a React Font-End Developer. I 
                create responsive secure websites for my client.
            </p>
            <Link to='/Contacts'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={Img2} className='img' alt='true'/>
            
                </div>
                <div className='img-stack bottom'>
                    <img src={Img1} className='img' alt='true'/>
            
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent