import React from 'react';
import classes from './modelsOptions.module.scss';
import {Link} from 'react-router-dom';

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
                <Link id="logo" to="/women">
                    <img src='https://images.unsplash.com/photo-1582749650161-289d7e4249e2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=358&h=300&q=80' alt="women"/>
                    <h3 style={{marginLeft: '-3px', fontSize: '5.5rem'}}>W</h3>
                </Link>
                </div>
                <div className={classes.option}>
                <Link id="logo" to="/men">
                    <img src='https://images.unsplash.com/photo-1536303158031-c868b371399f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&h=300&q=80' alt="men"/>
                    <h3>M</h3>
                    </Link>
                </div>

            </div>
        </div>
    );
}
 
export default modelsOptions;