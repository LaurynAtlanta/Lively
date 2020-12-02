import React from 'react';
import peaches from '../../images/peaches.jpg'
import standingfield from '../../images/standingfield.jpg';
import classes from './slider.module.scss';

const Slider = () => {
    return (  
        <div>
            <div className={classes.slide}>
                <div className={classes.img}>
                    <img src={peaches} alt=""/>
                    <p>GEORGIA | FRANK MAG</p>
                </div>
                <div className={classes.img}>
                    <img src={standingfield} alt=""/>
                    <p>ROBIN | VOGUE POLAND</p>
                </div>
            </div>
        </div>
    );
}
 
export default Slider;