import React from 'react';
import classes from './Nav.module.scss';
import logo from '../../images/logo.svg';

const Nav = () => {
    return (  
        <nav>
            <div className={classes.burger}>
                <div className={classes.navline}></div>
                <div className={classes.navline}></div>
                <div className={classes.navline}></div>
            </div>
            <div className={classes.logo}>
                <img src={logo} alt="Logo"/>
            </div>
        </nav>
    );
}
 
export default Nav;