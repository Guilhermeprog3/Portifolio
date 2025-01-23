// import React from 'react';
import Navbar from '../../components/navbar';
import ContactBody from '../../components/body_contact';
import '../style/style.css'
import StarryBackground from '../star/star';

function Contact() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
  
      <div style={{ height: '100%' }}>
        <StarryBackground />
        <Navbar />
        <div style={{ height: '100%',justifyContent:'center',display:"flex" }}>
          <ContactBody />
        </div>
      </div>
    </div>
  );
}

export default Contact;
