import React from 'react';
import Slider from '../components/HomeComponents/slider'
import ModelsOptions from '../components/HomeComponents/modelsOptions';
import FeaturedNews from '../components/HomeComponents/featuredNews';
import Instagram from '../components/HomeComponents/instagram';

const Home = () => {
    return (  
        <div>
            <Slider/>
            <ModelsOptions/>
            <FeaturedNews/>
            <Instagram/>
        </div>
    );
}
 
export default Home;