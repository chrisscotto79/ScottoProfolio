import { React } from "react";
import './HeroSection.css';




function HeroSection() {
    
  return (
    
    <div className='hero-container'>

        {/* Left side picture of myself */}
        <div className="section-item1">
            <img src="ColorCutout.Png" alt="ME"/>
        </div>
        {/* Welcome message */}
        <div className="section-item2">
          <div className="floating">
            <div className="shape"/>
          </div>
          
          <h1>My Name is Christopher Scotto</h1>
          <h2> Software Engineering
          </h2>
          

        </div>
        

    </div>
    
    
    
  );
}

export default HeroSection;