import React from 'react';
import Slider from '../components/HomeComponents/slider';
import AfterSlider from '../components/HomeComponents/afterSlider';


const Home = () => {
    return (  
        <div className='home'>
            <Slider/>
            <AfterSlider/>
        </div>
    );
}
 
export default Home;