import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <section>
      <div className='c-wrapper'>  
        <div className='paddings innerwidht flexCenter cc-container'>
          <div className='flexColStar c-left'>
            <span className='orangeText-s'>Contact us:</span>
            <span className='PrimaryText-s'>Choose Your Contact way</span>
            <span>This Contact can help to achieve your Goals</span>
            <div className='flexColStar contactModes'>
              {/* first row */}
              <div className='flexColStar row'>
                <div className='flexColStar mode'>
                  <div className='flexStar'>
                    <div className='flexCenter icon'>
                      <MdCall size={24}/>
                    </div>
                    <div className='flexColStar detail'>
                      <span>Call</span>
                      <span>+91 9142002770</span>
                    </div>
                  </div>
                  <div className='flexCenter button'> Call Now</div>
                </div>
              </div>
              {/* second row */}
              <div className='flexStar row'>
                <div className='flexColStar mode'>
                  <div className='flexStar'>
                    <div className='flexCenter icon'>
                      <BsFillChatDotsFill size={24}/>
                    </div>
                    <div className='flexColStar detail'>
                      <span>Chat with AI</span>
                      <span>+91 9142002770</span>
                    </div>
                  </div>
                  <div className='flexCenter button'> Chat Now</div>
                </div>
              </div>
              {/* third row */}
              <div className='flexStar row'>
                <div className='flexColStar mode'>
                  <div className='flexStar'>
                    <div className='flexCenter icon'>
                      <HiChatBubbleBottomCenter size={24}/>
                    </div>
                    <div className='flexColStar detail'>
                      <span>Message</span>
                      <span>+91 9142002770</span>
                    </div>
                  </div>
                  <div className='flexCenter button'>Message Now</div>
                </div>
              </div>
              {/* 4th row */}
              <div className='flexStar row'>
                <div className='flexColStar mode'>
                  <div className='flexStar'>
                    <div className='flexCenter icon'>
                      <BsFillChatDotsFill size={24}/>
                    </div>
                    <div className='flexColStar detail'>
                      <span>Chat Assistant</span>
                      <span>+91 9142002770</span>
                    </div>
                  </div>
                  <div className='flexCenter button'>Chat Now</div>
                </div>
              </div>
            </div>
          </div>
          <div className='c-right'>
            <div className='img-container'>
              <img src='home.jpg' alt='contact img'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
