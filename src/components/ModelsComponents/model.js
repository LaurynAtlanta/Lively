import React from 'react';
import wedding from '../../images/wedding.jpg';
import classes from './model.module.scss';

const Model = () => {
    return (  
        <div className={classes.model}>
            <img src={wedding} alt=""/>
            <h3>NAME</h3>
        </div>
    );
}
 
export default Model;