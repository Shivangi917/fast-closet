import React from 'react';
import backgroundImage from './images/background.png';

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',    
        backgroundPosition: 'center', 
        height: '100vh',         
        width: '100%',             
        display: 'flex',           
        justifyContent: 'flex-start', 
        alignItems: 'center',      
        paddingLeft: '3%',          
        color: 'black' 
        
      }}
    >
      <div style={{ maxWidth: '600px' }}> 
        <p style={{ 
          fontSize: '4rem',       
          fontWeight: 'bold',     
          lineHeight: '1.2',     
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          Get the Best Closet in Minutes
        </p>
        <p style={{
          fontSize: '2em',
          color: 'gray',
          lineHeight: '1'
        }}>
          Style delivered, virtually and swiftly.
        </p>
      </div>
    </div>
  );
};

export default Hero;
