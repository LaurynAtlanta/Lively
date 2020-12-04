import React from 'react';
import ModelsOptions from '../HomeComponents/modelsOptions'
import FeaturedNews from '../HomeComponents/featuredNews';
import Instagram from '../HomeComponents/instagram';
import classes from './afterSlider.module.scss';

const AfterSlider = () => {

    return (  
        <div className={classes.AfterSlider}>
            <div className="models">
                <ModelsOptions/>
            </div>
            <div className={classes.news}>
                <FeaturedNews/>
            </div>
            <div className="instagram">
                <Instagram/>
            </div>
        </div>
    );
}
 
export default AfterSlider;