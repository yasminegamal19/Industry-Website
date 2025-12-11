import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Results from '../Results/Results';
import CatArea from '../CatArea/CatArea';
import Reviews from '../Review/Reviews';
import Heading from '../Heading/Heading';

const Home = () => {
    return (
        <div>
            <Heading />
            <CatArea />
            <About />
            <Results />
            <Services />
            <Reviews />
        </div>
    );
}

export default Home;
