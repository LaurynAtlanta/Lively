import React, {useRef, useEffect} from 'react';
import classes from './slider.module.scss';
import {TimelineLite, Power3} from 'gsap';

const Slider = () => {

    let slides = useRef(null);

    useEffect(()=> {
        let tl = new TimelineLite();
        tl.from(slides, 1, {x: -2000, ease: Power3, opacity: 0, zIndex: 10})
    },[])

    return (  
        <div className={classes.slides} ref={el => slides = el}>
            <div className={classes.slide}>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1588746054794-744a768062eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=600&q=80' alt=""/>
                    <p>GEORGIA | FRANK MAG</p>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1589734004800-39305a70c03c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=600&q=80' alt=""/>
                    <p>ROBIN | VOGUE POLAND</p>
                </div>
            </div>
        </div>
    );
}
 
export default Slider;