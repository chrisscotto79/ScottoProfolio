import React from 'react';
import '../../App.css';
import HeroSection from '../mainsections/HeroSection';
import About from '../mainsections/AboutMe';
import PastProjects from '../mainsections/pastprojects'
import ContactForm from '../mainsections/Contact';


const Home = () => {

  return (
    <div>
    <HeroSection scrollToId="section1" />
    <PastProjects />
    <section id="section1">
      <About />
    </section>
    <ContactForm />
    
  </div>
  )
};

export default Home;