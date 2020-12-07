import React from 'react';
import classes from './modelsOptions.module.scss';

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
                    <img src='https://images.unsplash.com/photo-1582749650161-289d7e4249e2' alt="women"/>
                    <h3 style={{marginLeft: '-3px', fontSize: '5.5rem'}}>W</h3>
                </div>
                <div className={classes.option}>
                    <img src='https://images.unsplash.com/photo-1536303158031-c868b371399f' alt="men"/>
                    <h3>M</h3>
                </div>
            </div>
        </div>
    );
}
 
export default modelsOptions;