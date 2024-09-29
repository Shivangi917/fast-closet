import React from 'react';
import backgroundImage from './images/background.png';

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',    // Ensures the image covers the entire div
        backgroundPosition: 'center', // Centers the image
        height: '100vh',            // Full viewport height
        width: '100%',              // Full width of the screen
        display: 'flex',            // Flexbox for positioning
        justifyContent: 'flex-start', // Aligns content to the left
        alignItems: 'center',       // Centers content vertically
        paddingLeft: '3%',          // Adds left padding for spacing
        color: 'gray',             // Text color for visibility on the image
        fontFamily: "'Playfair Display', serif",  // Custom classical font
      }}
    >
      <div style={{ maxWidth: '600px' }}>  {/* Limit width for better text formatting */}
        <h1 style={{ 
          fontSize: '4rem',        // Large font size
          fontWeight: 'bold',      // Bold for emphasis
          lineHeight: '1.2',       // Spacing between lines
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' // Adds a text shadow for better contrast
        }}>
          Get the Best Closet in Minutes
        </h1>
      </div>
    </div>
  );
};

export default Hero;
