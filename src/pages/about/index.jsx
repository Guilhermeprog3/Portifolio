// import React from 'react';
import Navbar from '../../components/navbar';
import About_body from '../../components/body_about';
import About_Skills from '../../components/skills';
import RecentWorks from '../../components/recents_works';
import '../style/style.css';
import StarryBackground from '../star/star';

function About() {
  return (
    <div className="about-container">
      <StarryBackground />
      <Navbar />
      <div className="about-content">
        <About_body />
        <About_Skills />
        <RecentWorks />
      </div>
    </div>
  );
}

export default About;
