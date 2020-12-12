import React, {useRef, useEffect} from 'react';
import classes from './model.module.scss';
import {TimelineLite, Power3} from 'gsap';
import {Link, useLocation} from 'react-router-dom';

const Model = (props) => {
    let location = useLocation();

    // let gender;

    //     if(location.pathname === '/Men'){
    //         gender = '/Men';
    //     } else if (location.pathname === '/Women'){
    //         gender = '/Women';
    //     }
    //     console.log(gender);

    
    let model = useRef(null);

    useEffect(()=> {
        let tl = new TimelineLite();
        tl.from(model, 0.6, {x: 20, ease: Power3, opacity: 0, scale: 0.2})
    },[])

     let modelHandler = () => {
         props.setModel(props.name)
     }

    return (  
        <div className={classes.model} ref={el => model = el} >
            {/* =======================================================
            this needs to link to either men or women with props.name
            ======================================================= */}
            <Link to={`${location.pathname}/${props.name}`} onClick={modelHandler}>
            <img src={props.mainImage} alt="Model Headshot"/>
            <h3>{props.name}</h3>
            </Link>
        </div>
    );
}
 
export default Model;