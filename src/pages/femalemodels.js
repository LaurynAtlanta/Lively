import React, {useEffect, useState} from 'react';
import Model from '../components/ModelsComponents/model';
import classes from './models.module.scss';
import axios from '../axios-models';

const FemaleModels = (props) => {
    const [FemaleModels, setFemaleModels]= useState(null)
    useEffect(()=> {
        axios.get('https://lively-fe765.firebaseio.com/Models/Women.json')
            .then(response => {
                setFemaleModels(response.data);
            })
            .catch((error)=> {
                console.log(error);
            })
    }, []);

    let models = '';
    if(FemaleModels){
        models= (
            Object.keys(FemaleModels).map((model, index)=> {
                return <Model 
                            name={FemaleModels[model].name} 
                            mainImage={FemaleModels[model].mainImage}
                            key={FemaleModels[model].name}
                            id={FemaleModels[model].id}
                            setModel={props.setModel}/>
            })
        )
    }
    return (  
        <div className={classes.modelsDisplay}>
            <div className="title">
                <div className="circle"></div>
                <h2>WOMEN</h2>
                <div className="line"></div>
            </div>
            <div className={classes.models}>
                {models}
            </div>
        </div>
    );
}
 
export default FemaleModels;