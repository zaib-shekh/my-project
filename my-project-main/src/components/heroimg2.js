import React, { Component } from 'react'
import './heroimg2.css'

class heroimg2 extends Component {
    render(){
        return (
    <div className=' heroimg'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )
    }
  
}

export default heroimg2