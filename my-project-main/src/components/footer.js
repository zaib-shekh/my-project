import React from 'react'
import './footer.css'
import {FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'
const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome className='icons'/>
                    <div>
                        <p>123 Housinng Society.</p>
                        <p>India</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone className='icons'/> 1-233-2323-13</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk className='icons'/> lilchamp2937@gmail.com</h4>
                </div>

            </div>
            <div className='right'>
                <h4>About this company</h4>
                <p>This is me Sheikh Zaib. CEO &
                     Founder of The Truth. I enjoy 
                     making nature videos and add 
                     songs on those videos.</p>
                     <div className='social'>
                        <FaFacebook className='icons'/>
                        <FaTwitter className='icons'/>
                        <FaInstagram className='icons'/>
                     </div>
            </div>
        </div>
    </div>
  )
}

export default footer