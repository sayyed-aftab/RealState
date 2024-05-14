import React from 'react'
import './Hero.css';
import CountUp from 'react-countup';
import{motion} from 'framer-motion';
const Hero = () => {
    return (
        <section className=' flexCenter hero-wrapper'>
            <div className=' hero-container'>
                <div className='flexColStar hero-left'>
                    <div className='hero-title'>
                        <motion.h1
                        initial={{y: "2rem" ,opacity:0}}
                            animate={{y:0,opacity:1}}
                        transition={{duration:2,
                            type:"spring"
                        }}
                        >

                        <h2>Affordable property with Less Price</h2>
                        <p>Experience modern luxury and sustainable design at. </p>
                        <br></br></motion.h1>
                        <p> Discover meticulously crafted buildings that redefine urban living.</p>
                    </div>
                    <div className='flexCenter search-bar'>
                        <i class="fa-solid fa-location-dot"></i>
                        <input type='text' placeholder='Search for a property' />
                        <button className='button'>Search</button>
                    </div>
                    <div className='flexCenter stats'>
                        <div className='flexColCenter stats'>
                            <span>
                                <CountUp start={320} end={700} duration={4}/>
                                <span className='orangeText'>+</span>
                                <br></br>
                                <span className='secondaryText'>Premium  properties</span>
                            </span>
                        </div>
                        <div className='flexColCenter stats'>
                            <span>
                                <CountUp start={580} end={5500} duration={4}/>
                                <span className='orangeText'>+</span>
                                <br></br>
                                <span className='secondaryText'>Happy  Clients</span>

                            </span>
                        </div>
                        <div className='flexColCenter stats'>
                            <span>
                                <CountUp  end={1099} duration={4}/>
                                <span className='orangeText'>+</span>
                                <br></br>
                                <span className='secondaryText'>Available  Properties</span>

                            </span>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className=' flexCenter hero-right'>
                    <motion.div
                    initial={{x:"7rem",opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{
                        duration:2,
                        type:"spring"
                    }}
                    >
                    <div className='img-container'>
                        <img src='home.jpg' />
                    </div></motion.div>
                </div>
            </div>
        </section>

    )
}

export default Hero;
