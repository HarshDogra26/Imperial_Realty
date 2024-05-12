import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
  return (
    <div>
       <footer className={
        isHomePage ? 'homePage_footer otherPage_footer' : 'otherPage_footer'
       }>
        <div className="container">
            <h4 className='footer1'>IMPERIAL REALTY</h4>
            <p className='footer1'>Among the best Realty Corporation all over the World!</p>
            <ul>
                <li>
                    <Link to = {'/'}>Home</Link>
                </li>
                <li>
                    <Link to = {'/termsandconditions'}>Terms And Conditions</Link>
                </li>
                <li>
                    <Link to = {'/contact'}>Contact</Link>
                </li>
            </ul>
        </div>
        <div className="container">
            <h4 className='footer1'>Connect With Us</h4>
            <p className='footer1'>+999 999 9999</p>
            <p className='footer1'>imperialRealty@gmail.com</p>
            <p className='footer1'>All Rights Reserved</p>
        </div>
       </footer>
    </div>
  )
}

export default Footer