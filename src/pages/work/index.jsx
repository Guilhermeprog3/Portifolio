// import React from 'react';
import Navbar from '../../components/navbar';
import Body_work from '../../components/body_work';
import '../style/style.css';
import StarryBackground from '../star/star';

function Work() {
  return (
    <div>
  
        
      
      
      <div style={{ position: 'relative', zIndex: 0 }}>
        <StarryBackground />
        <Navbar />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Body_work />
        </div>
      </div>
    </div>
  );
}

export default Work;
