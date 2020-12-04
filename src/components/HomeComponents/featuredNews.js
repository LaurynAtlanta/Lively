import React,{useState, useEffect} from 'react';
import vogue from '../../images/vogues.jpg';
import bride from '../../images/wedding.jpg';
import polaroid from '../../images/polaroid.jpg';
import stretching from '../../images/stretching.jpg';
import classes from './featuredNews.module.scss';


const FeaturedNews = () => {
    const [news, setNews]= useState([{image: vogue, title: 'JOSIE X VOGUE', date: 'DEC 2020'}, {image: bride, title: 'RANEY X TODAYS BRIDE', date: 'DEC 2020'}, {image: polaroid, title: 'BRIT X PAPER MAG', date: 'DEC 2020'}, {image: stretching, title: 'PHEOBE X BYBLE', date: 'DEC 2020'}]);
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 600);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth>= 900);

    const updateSize = () =>{
        setIsTablet(window.innerWidth>=600);
        setIsDesktop(window.innerWidth>= 900);
    }

    useEffect(() => {
        window.addEventListener("resize", updateSize);
    });

    return (  
        <div className={classes.featuredNews}>
            <div className='title'>
                <div className='circle'></div>
                <h2>FEATURED NEWS</h2>
                <div className='line'></div>
            </div>
            <div className={classes.news}>
            <div className={classes.newsSection}>
                    <img src={news[0].image} alt={news[0].title}/>
                    <div className={classes.content}>
                        <h5>{news[0].title}</h5>
                        <p>{news[0].date}</p>
                    </div>
                </div>
                <div className={classes.newsSection}>
                    <img src={news[1].image} alt={news[1].title}/>
                    <div className={classes.content}>
                        <h5>{news[1].title}</h5>
                        <p>{news[1].date}</p>
                    </div>
                </div>
            {isTablet? (
                <>
                <div className={classes.newsSection}>
                    <img src={news[2].image} alt="vogue"/>
                    <div className={classes.content}>
                        <h5>{news[2].title}</h5>
                        <p>{news[2].date}</p>
                    </div>
                </div>
                </>
            ): null}
            {isDesktop? (
                <div className={classes.newsSection}>
                    <img src={news[3].image} alt="bride"/>
                    <div className={classes.content}>
                        <h5>{news[3].title}</h5>
                        <p>{news[3].date}</p>
                    </div>
                </div>
            ): null}
            </div>
            <button className={classes.readmorebutton}>READ MORE</button>
        </div>
    );
}
 
export default FeaturedNews;