import React,{useState} from 'react';
import classes from './Nav.module.scss';
import logo from '../../images/logo.svg';

const Nav = () => {
    const [clicked, setClicked] = useState(false);
    const toggleHandler= () => {
        setClicked(!clicked);
    }


    return (  
        <nav>
            <ul className={clicked? `${classes.show} ${classes.left}`: classes.left}>
                <li>WOMEN</li>
                <li>MEN</li>
            </ul>
            <div className={classes.burger} onClick={toggleHandler}>
                <div className={classes.navline}></div>
                <div className={classes.navline}></div>
                <div className={classes.navline}></div>
            </div>
            <div className={classes.logo}>
                <img src={logo} alt="Logo"/>
            </div>
            <ul className={clicked? `${classes.show} ${classes.right}`: classes.right}>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    );
}
 
export default Nav;