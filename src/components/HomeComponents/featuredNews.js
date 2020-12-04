import React from 'react';
import vogue from '../../images/vogues.jpg';
import bride from '../../images/wedding.jpg';
import classes from './featuredNews.module.scss';

const FeaturedNews = () => {
    return (  
        <div className={classes.featuredNews}>
            <div className='title'>
                <div className='circle'></div>
                <h2>FEATURED NEWS</h2>
                <div className='line'></div>
            </div>
            <div className={classes.news}>
                <div className={classes.newsSection}>
                    <img src={vogue} alt="vogue"/>
                    <div className={classes.content}>
                        <h5>JOSIE X VOGUE</h5>
                        <p>DEC 2020</p>
                    </div>
                </div>
                <div className={classes.newsSection}>
                    <img src={bride} alt="bride"/>
                    <div className={classes.content}>
                        <h5>RANEY X TODAYS BRIDE</h5>
                        <p>DEC 2020</p>
                    </div>
                </div>
            </div>
            <button className={classes.readmorebutton}>READ MORE</button>
        </div>
    );
}
 
export default FeaturedNews;