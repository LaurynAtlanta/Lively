import React from 'react';
import classes from './model.module.scss';

const Model = (props) => {
    return (  
        <div className={classes.model}>
            <img src={props.mainImage} alt="Model Headshot"/>
            <h3>{props.name}</h3>
        </div>
    );
}
 
export default Model;