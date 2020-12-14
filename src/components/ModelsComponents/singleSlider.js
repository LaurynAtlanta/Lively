import React,{useState} from 'react';
import classes from './singleSlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const SingleSlider = (props) => {
    let [current, setCurrent] = useState(0);
    let images = [props.firstImage, props.secondImage, props.thirdImage, props.fourthImage];
    const length = images.length;

    let nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    let prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }
    return (  
        <div className={classes.singleSlider}>
            <FontAwesomeIcon icon={faChevronLeft} className={classes.left} onClick={prevSlide}/>
            
            {images.map((image, index)=> {
                return (
                    <div className={index === current ? `${classes.slide} ${classes.active}` : `${classes.slide}`} key={index}>
                        {index === current && (<img src={image} alt="Photoshoots"/>)}
                    </div>
                )
            })}
            <FontAwesomeIcon icon={faChevronRight} className={classes.right} onClick={nextSlide}/>
        </div>
    );
}
 
export default SingleSlider;