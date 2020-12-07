import React from 'react';
import classes from './slider.module.scss';

const Slider = () => {
    return (  
        <div className={classes.slides}>
            <div className={classes.slide}>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1588746054794-744a768062eb' alt=""/>
                    <p>GEORGIA | FRANK MAG</p>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1589734004800-39305a70c03c' alt=""/>
                    <p>ROBIN | VOGUE POLAND</p>
                </div>
            </div>
        </div>
    );
}
 
export default Slider;