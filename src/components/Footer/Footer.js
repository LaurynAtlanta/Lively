import React from 'react';
import classes from './Footer.module.scss';
import secondaryLogo from '../../images/SecondaryLogo.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import instagram from '../../images/instagram.svg';
import {Link} from 'react-router-dom';



const Footer = () => {
    return (  
        <div className={classes.footer}>
            <div className={classes.logo}>
                <img src={secondaryLogo} alt="Secondary Logo"/>
            </div>
            <div className="links">
                <ul>
                    <li><Link id="logo" to="/women">CONTACT</Link></li>
                    <li>NEWSLETTER</li>
                    <li>PRIVACY POLICY</li>
                </ul>
                <div className={classes.socials}>
                    <img src={instagram} alt="instagram"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={facebook} alt="facebook"/>
                </div>
            </div>
            <div className={classes.circle}></div>
        </div>
    );
}
 
export default Footer;