import React from 'react'
import './Footer.css'
import discord from '../../assets/social-media/Discord.png'
import youtube from '../../assets/social-media/youtube.png'
import instagram from '../../assets/social-media/instagram.png'
import snapchat from '../../assets/social-media/snapchat.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={discord} style={{ background: 'white', border: 'none', borderRadius: '50px' }} alt="" />
        <img src={youtube} style={{ background: 'white', border: 'none', borderRadius: '50px' }} alt="" />
        <img src={instagram} style={{ background: 'white', border: 'none', borderRadius: '50px' }} alt="" />
        <img src={snapchat} style={{ background: 'white', border: 'none', borderRadius: '50px' }} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className="copyright-text">&copy; 2004-2099 Netflix, Inc.</p>
    </div>
  )
}


export default Footer