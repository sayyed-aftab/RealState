import React from 'react'
import './Banner.css';

const Banner = () => {
  return (
    <>    <div className='newsletter'>
    <div className="newstext">
        <h4>Sign Up For Newsletter</h4>
        <p>Get Email Updates about our latest Property and <span>Special Offer</span></p>
    </div>
    <div className="form">
        <input type="text" placeholder="Enter Your Email Address" />
        <button>Sign Up</button>
    </div>
</div>

</>
  )
}


export default Banner;