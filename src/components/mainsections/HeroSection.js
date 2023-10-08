import React from "react";
import './HeroSection.css';






const HeroSection = ({ scrollToId }) => { 
  const handleClick = () => {
    const section = document.getElementById(scrollToId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  };



  return (
    <>
      <div className='hero-container'>

        {/* Left side picture of myself */}
        <div className="section-item1">
          <img src={process.env.PUBLIC_URL + '/images/cutout.png'} alt="Its me" />
        </div>
        {/* Welcome message */}
        <div className="section-item2">

          <h1>Welcome to my  <span className="section-item2-text"> Software Engineering </span> Portfolio</h1>

          <button onClick={handleClick} className="hero-button">
            <span>Read More</span>
          </button>
        </div>
      </div>
      <div className="bottom-description">
        <div className="bottom-description-border">
          <p>
            Welcome to Christopher Scotto portfolio, where innovation meets functionality! As a dedicated software engineer, I am driven by a deep passion for crafting cutting-edge and user-centric applications. I invite you to embark on an exciting journey through my portfolio, where you can witness firsthand the tangible results of my expertise and skills. Join me in exploring a realm of creativity, innovation, and seamless user experiences. Together, let's push the boundaries of what's possible in the realm of technology.
          </p>
          
        </div>
          

      </div>

    </>



  );
}

export default HeroSection;
