import React from 'react';
import Model from '../components/ModelsComponents/model';
import classes from './models.module.scss';

const models = () => {
    return (  
        <div className={classes.modelsDisplay}>
            <div className="title">
                <div className="circle"></div>
                <h2>WOMEN</h2>
                <div className="line"></div>
            </div>
            <div className="models">
                <Model/>
                <Model/>
                <Model/>
                <Model/>
                <Model/>
            </div>
        </div>
    );
}
 
export default models;