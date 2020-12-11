import React,{useEffect, useState} from 'react';
import SingleSlider from '../components/ModelsComponents/singleSlider';
import axios from '../axios-models';
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
            <div className="singleModel">
                <SingleSlider/>
                <img src={single.mainImage} alt=""/>
                <img src="#" alt=""/>
                <div className="details">
                    <div className="about">
                        <h2 className='name'>{props.name}</h2>
                        <div className="info">
                        <ul>
                            <li>{single.height}</li>
                            <li>{single.bust}</li>
                            <li>{single.waist}</li>
                            <li>{single.hips}</li>
                            <li>{single.shoe}</li>
                            <li>{single.hair}</li>
                        </ul>
                        </div>
                    </div>
                    <div className="options">
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