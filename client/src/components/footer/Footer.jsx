import React from 'react';
import { Link } from 'react-router-dom';
import { RiGithubFill, RiLinkedinFill, RiInstagramFill, RiYoutubeFill } from 'react-icons/ri';
import './footer.css';
import Modal from '../modal/Modal';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link to={'/men'} className="link link-hover">Men</Link> 
        <Link to={'/women'} className="link link-hover">Women</Link> 
        <Link to={'/profile'} className="link link-hover">Profile</Link> 
        <Modal 
          btnTitle={"About Us"}
          mainTitle={"About Workouts Tracker"}
          text={"Workouts Tracker is a fitness organization that helps you keep track of your workouts and also provides you with blogs enriched with tips to keep you on the go. We never leave our member alone that's why we have well trained trainees to assist you. Follow us on our social media platforms for more info."}
        />
      </nav> 
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to={'https://github.com/bankah-junior'}>
            <RiGithubFill size={24} />        
          </Link> 
          <Link to={'https://www.linkedin.com/in/anthony-bekoe-bankah-080448240'}>
            <RiLinkedinFill size={24} />        
          </Link> 
          <Link to={'https://instagram.com/iam.bankah?igshid=ZGUzMzM3NWJiOQ=='}>
            <RiInstagramFill size={24} />    
          </Link>
          <Link to={'https://www.youtube.com/@welearn2?sub_confirmation=1'}>
            <RiYoutubeFill size={24} />    
          </Link>
        </div>
      </nav> 
      <aside>
        <p>Copyright © 2023 - All right reserved by <Link to={'https://www.bankidev.netlify.app/'}><b><i>BankiDev</i></b></Link></p>
      </aside>
    </footer>
  )
}

export default Footer