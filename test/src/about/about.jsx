import { useState } from 'react'
import katowiceLogo from '../assets/katowiceLogo.svg';
import jsLogo from '../assets/jsLogo.svg';
import phone from '../assets/phone.svg';
import email from '../assets/email.svg';
import uni from '../assets/uni.svg';

export function About() {

  return (
    <>
      <div className="aboutPage page">
        <div className="listItem city">
          <p>Lives in:</p>
          <h5>Katowice, <br></br> Poland</h5>
          <img src={katowiceLogo} alt="Katowice Logo" className="icon katowice-logo"/>
        </div>
        <div className="listItem job">
          <p>Job title:</p>
          <h5> Frontend developer<br></br>Technical solutions engineer</h5>
          <img src={jsLogo} alt="javascript logo" className="icon js-logo"/>
        </div>
        <div className="listItem phone">
          <p>Phone:</p>
          <h5>+48 503 751 545</h5>
          <img src={phone} alt="phone icon" className="icon phone-icon"/>
        </div>
        <div className="listItem email">
          <p>Email:</p>
          <h5>malgorzata.k.szulc@gmail.com</h5>
          <img src={email} alt="email icon" className="icon email-icon"/>
        </div>
        <div className="listItem eduction">
          <p>Education:</p>
          <h5>Master degree (Law) at Jagiellonian University</h5>
          <img src={uni} alt="email icon" className="icon email-icon"/>
        </div>

        <div className='summary'>
          <p>
            I'm a passionate developer specializing in pure Javascript frontend solutions but with a wide knowledge and experience of it's frameworks and libraries on both forontend and side.
            <br></br>
            <br></br>
            Privately I'm a wife and a mom, a gamer and a huge fan of music
          </p>
        </div>
      </div>
    </>
  )
}

export default About
