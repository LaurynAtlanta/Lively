import React from 'react';
import peaches from '../../images/peaches.jpg';
import sittinginfield from '../../images/sittinginfield.jpg';
import vogues from '../../images/vogues.jpg';
import smoking from '../../images/smoking.jpg';
import polaroid from '../../images/polaroid2.jpg';
import women from '../../images/blackwhitewomen.jpg';
import classes from './instagram.module.scss';

const Instagram = () => {
    return (  
        <div className={classes.Instagram}>
            <div className="title">
                <div className="circle"></div>
                <h2>INSTAGRAM</h2>
                <div className="line"></div>
            </div>
            <div className={classes.grid}>
                <div className={classes.image}>
                    <img src={peaches} alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src={sittinginfield} alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src={vogues} alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src={smoking} alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src={polaroid} alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src={women} alt="instagram"/>
                </div>
            </div>
        </div>
    );
}
 
export default Instagram;