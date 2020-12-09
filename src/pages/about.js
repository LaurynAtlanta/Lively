import React from 'react';
import classes from './about.module.scss';

const About = () => {
    return (  
        <div className={classes.aboutPage}>
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
                <div className={classes.content}>
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