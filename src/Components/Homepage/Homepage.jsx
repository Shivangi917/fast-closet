import React from 'react';
import Hero from './Hero'; 
import ProductShowcase from './ProductShowcase';
import Features from './Features';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div>
            <Hero />
            <ProductShowcase/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default Homepage;
