import React,{useState} from 'react';
import classes from './Nav.module.scss';
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';

const Nav = () => {
    const [clicked, setClicked] = useState(false);
    const toggleHandler= () => {
        setClicked(!clicked);
    }


    return (  
        <nav>
            <ul className={clicked? `${classes.show} ${classes.left}`: classes.left}>
                <li><Link id="logo" to="/women">WOMEN</Link></li>
                <li><Link id="logo" to="/men">MEN</Link></li>
            </ul>
            <div className={classes.burger} onClick={toggleHandler}>
                <div className={classes.navline}></div>
                <div className={classes.navline}></div>
                <div className={classes.navline}></div>
            </div>
            <Link id="logo" to="/">
            <div className={classes.logo}>
                <img src={logo} alt="Logo"/>
            </div>
            </Link>
            <ul className={clicked? `${classes.show} ${classes.right}`: classes.right}>
                <li><Link id="logo" to="/about">ABOUT</Link></li>
                <li><Link id="logo" to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    );
}
 
export default Nav;