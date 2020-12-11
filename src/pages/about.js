import React, {useRef, useEffect} from 'react';
import classes from './about.module.scss';
import {gsap, TimelineLite, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    let content = useRef(null);
    let about = useRef(null);

    useEffect(()=> {

        gsap.fromTo(content, {
            autoAlpha: 0
        }, {
            duration: 0.5,
            autoAlpha: 1,
            ease: Power3,
            scrollTrigger: {
                trigger: content,
                start: 'top bottom-=100px',
                toggleActions: 'play none none reverse'
            }
        });
    })
    
    useEffect(()=> {
        let tl = new TimelineLite();
        tl.from(about, 1, {y: +2000, ease: Power3, opacity: 0, zIndex: 10});
    
    },[])


    return (  
        <div className={classes.aboutPage} ref={el => about = el}>
            <div className={classes.aboutSection}>
                <div className={classes.content}>
                    <div className="title">
                        <div className="circle"></div>
                        <h2>ABOUT</h2>
                        <div className="line"></div>
                    </div>
                    <p>Lively Models was founded by Noel Keys in 2004 
                        with the  goal of giving young men and women 
                        the opportunity to be involved 
                        in the fashion universe.</p>
                    <p>New York was the perfect place for this new 
                        opportunity and allowed for many jobs to come for
                        the talent that Noel and the team got to know.</p>
                    <p>Lively is the largest modelling agency on 
                        the East Coast and one of the most respected 
                        in the world. Noels well-established agency in 
                        Manhattan is quickly achieving the same notoriety.</p>
                </div>
                <img src='https://images.unsplash.com/photo-1571757219458-458797f1a901?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=80' alt=""/>
            </div>
            <div className={classes.scoutSection}>
                <div className={classes.content} ref={el => content = el}>
                    <div className="title">
                        <div className="circle"></div>
                        <h2>GET SCOUTED</h2>
                        <div className="line"></div>
                    </div>
                    <p>We only respond if we are interested.<br/>
                        See below for photo submission tips:</p>
                    <ol>
                        <li>Headshot straight on</li>
                        <li>Full length body shot</li>
                        <li>3/4 shot straight on</li>
                        <li>Headshot profiles</li>
                    </ol>
                    <h3>Submit to: </h3>
                    <p><span>Lively-models-scout@lively.com</span></p>
                </div>
                <img src='https://images.unsplash.com/photo-1595745850303-4162cf13be61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=80' alt=""/>
            </div>
        </div>
    );
}
 
export default About;