import React, {useEffect, useState} from 'react';
import Model from '../components/ModelsComponents/model';
import classes from './models.module.scss';
import axios from '../axios-models';

const MaleModels = (props) => {
    const [MaleModels, setMaleModels]= useState(null)
    useEffect(()=> {
        axios.get('https://lively-fe765.firebaseio.com/Models/Men.json')
            .then(response => {
                setMaleModels(response.data);
            })
            .catch((error)=> {
                console.log(error);
            })
    }, []);

    let models = '';
    if(MaleModels){
        models= (
            Object.keys(MaleModels).map((model, index)=> {
                return <Model 
                            name={MaleModels[model].name} 
                            mainImage={MaleModels[model].mainImage}
                            key={MaleModels[model].name}
                            setModel={props.setModel}/>
            })
        )
    }
    return (  
        <div className={classes.modelsDisplay}>
            <div className="title">
                <div className="circle"></div>
                <h2>MEN</h2>
                <div className="line"></div>
            </div>
            <div className={classes.models}>
                {models}
            </div>
        </div>
    );
}
 
export default MaleModels;