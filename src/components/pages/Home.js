import React from 'react';
import '../../App.css';
import HeroSection from '../mainsections/HeroSection';
import Edu from '../mainsections/Edu';
import PastProjects from '../mainsections/pastprojects'


function Home() {
    
  return (
    <>
      <HeroSection />
      <PastProjects />
      <Edu />
    </>
  );
}

export default Home;