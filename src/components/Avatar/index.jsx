// import React from 'react';
import { Avatar, Box } from '@mui/material';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import PROFILE_IMG from '../../assets/PROFILE_IMG.jpeg';
import './styles.css';

const AvatarComp = () => {
  return (
    <Box className="container" style={{}}>
      <Avatar
        src={PROFILE_IMG}
        alt="Profile Picture"
        className="avatar"
        style={{ width: '300px', height: '300px',border:'3px solid #000' }}
      />
      <Box className="icons">
        <FaInstagram className="icon instagram" />
        <FaLinkedin className="icon linkedin" />
        <FaEnvelope className="icon email" />
        <FaGithub className="icon github" />
      </Box>
    </Box>
  );
};

export default AvatarComp;
