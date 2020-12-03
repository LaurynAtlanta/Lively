import React from 'react';
import classes from './modelsOptions.module.scss';
import women from '../../images/blackwhitewomen.jpg';
import men from '../../images/smoking.jpg';

const modelsOptions = () => {
    return (  
        <div>
            <div className='title'>
                <div className='circle'></div>
                <h2>MODELS</h2>
                <div className='line'></div>
            </div>
            <div className={classes.options}>
                <div className={classes.option}>
                    <img src={women} alt="women"/>
                    <h3>W</h3>
                </div>
                <div className={classes.option}>
                    <img src={men} alt="men"/>
                    <h3>M</h3>
                </div>
            </div>
        </div>
    );
}
 
export default modelsOptions;