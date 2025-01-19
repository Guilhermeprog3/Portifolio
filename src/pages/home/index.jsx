// import React from 'react';
import Navbar from '../../components/navbar';
import Body from '../../components/body';
import '../style/style.css';
import StarryBackground from '../star/star';
import Avatar_comp from '../../components/Avatar';

function Home() {
  return (
    <div style={{}}>
      <StarryBackground />
        <Navbar />
      

      <div style={{ position: 'relative', zIndex: 1,justifyContent:"space-between",flexDirection:"colum",display:'flex',width:"90%"}}>
        <Body />
        <Avatar_comp/>
      </div>
    </div>
  );
}

export default Home;
