import React from 'react';
import Hero from './Hero'; 
import ProductShowcase from './ProductShowcase';
import Features from './Features'

const Homepage = () => {
    return (
        <div>
            <Hero />
            <ProductShowcase/>
            <Features/>
        </div>
    );
};

export default Homepage;
