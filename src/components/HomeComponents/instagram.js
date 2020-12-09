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
                    <img src='https://images.unsplash.com/photo-1588746054794-744a768062eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80' alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1564568876462-0815e76d513a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80' alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1596382941523-f18a1ac95f53?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&h=500&q=80' alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1536303158031-c868b371399f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80' alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1602743052275-599ef803a04f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&h=500&q=80' alt="instagram"/>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1582749650161-289d7e4249e2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=358&h=300&q=80' alt="instagram"/>
                </div>
            </div>
        </div>
    );
}
 
export default Instagram;