import React from 'react';
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
                    <img src='https://images.unsplash.com/photo-1588746054794-744a768062eb' alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1564568876462-0815e76d513a' alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1596382941523-f18a1ac95f53' alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1536303158031-c868b371399f' alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1602743052275-599ef803a04f' alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1582749650161-289d7e4249e2' alt="instagram"/>
                </div>
            </div>
        </div>
    );
}
 
export default Instagram;