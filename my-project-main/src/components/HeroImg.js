import React from 'react';
import './HeroImg.css';
import IntroImg from '../assets/known.jpeg';
import {Link} from 'react-router-dom';
const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt='introimg'/>
        </div>
        <div className='content'>
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to='/project' className='btn'>PROJECT</Link>
                <Link to='/contacts' className='btn btn-light'>CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg