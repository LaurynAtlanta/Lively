import React,{useEffect, useState} from 'react';
import SingleSlider from '../components/ModelsComponents/singleSlider';
import axios from '../axios-models';
import classes from './singleModel.module.scss';
import { useLocation } from 'react-router-dom';

const SingleModel = (props) => {
    const [single, setSingle]= useState(null);
    let location = useLocation();
    let singleModelContent;

    useEffect(()=> {
        axios.get(`https://lively-fe765.firebaseio.com/Models${location.pathname}.json`)
                .then(response => {
                    setSingle(response.data);
                })
                .catch((error)=> {
                    console.log(error);
                }); 
    },[location])

    if(single){
        singleModelContent = (
            <div className={classes.singleModel}>
                <SingleSlider/>
                <img src={single.mainImage} alt=""/>
                <div className={classes.details}>
                    <div className={classes.about}>
                        <h2 className='name'>{single.name}</h2>
                        <div className={classes.info}>
                            <ul>
                                <li>Height:  <span>{single.height}</span></li>
                                <li>Bust:  <span>{single.bust}</span></li>
                                <li>Waist:  <span>{single.waist}</span></li>
                                <li>Hips:  <span>{single.hips}</span></li>
                            </ul>
                            <ul>
                                <li>Dress:  <span>{single.dress}</span></li>
                                <li>Shoes:  <span>{single.shoe}</span></li>
                                <li>Hair:  <span>{single.hair}</span></li>
                                <li>Eyes:  <span>{single.eyes}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.options}>
                        <ul>
                            <li>Portfolio</li>
                            <li>Polaroids</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (  
        <>
            {singleModelContent}
        </>
    );
}
 
export default SingleModel;