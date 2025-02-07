// import React from 'react';
import { Avatar, Box } from '@mui/material';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import PROFILE_IMG from '../../assets/PROFILE_IMG.jpeg';
import './styles.css';

const AvatarComp = () => {
  return (
    <Box
      className="container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        padding: 4,
        borderRadius: '16px',
        position: 'relative',
      }}
    >
      <Avatar
        src={PROFILE_IMG}
        alt="Profile Picture"
        sx={{
          width: '300px',
          height: '300px',
          border: '4px solid #64ffda',
          boxShadow: '0px 4px 20px rgba(100, 255, 218, 0.5)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          animation: 'rotate 20s linear infinite',
          '@keyframes rotate': {
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          },
        }}
      >
        <Box
          className="icon instagram"
          sx={{
            position: 'absolute',
            top: '-25px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 50,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: '#1a1a2e',
            color: '#ffffff',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#E1306C',
              color: '#ffffff',
              transform: 'translateX(-50%) scale(1.1)',
              boxShadow: '0px 6px 16px rgba(225, 48, 108, 0.5)',
            },
          }}
        >
          <FaInstagram size={24} />
        </Box>
        <Box
          className="icon linkedin"
          sx={{
            position: 'absolute',
            top: '50%',
            right: '-25px',
            transform: 'translateY(-50%)',
            width: 50,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: '#1a1a2e',
            color: '#ffffff',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#0077B5',
              color: '#ffffff',
              transform: 'translateY(-50%) scale(1.1)',
              boxShadow: '0px 6px 16px rgba(0, 119, 181, 0.5)',
            },
          }}
        >
          <FaLinkedin size={24} />
        </Box>
        <Box
          className="icon email"
          sx={{
            position: 'absolute',
            bottom: '-25px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 50,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: '#1a1a2e',
            color: '#ffffff',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#D44638',
              color: '#ffffff',
              transform: 'translateX(-50%) scale(1.1)',
              boxShadow: '0px 6px 16px rgba(212, 70, 56, 0.5)',
            },
          }}
        >
          <FaEnvelope size={24} />
        </Box>
        <Box
          className="icon github"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '-25px',
            transform: 'translateY(-50%)',
            width: 50,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: '#1a1a2e',
            color: '#ffffff',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#181717',
              color: '#ffffff',
              transform: 'translateY(-50%) scale(1.1)',
              boxShadow: '0px 6px 16px rgba(24, 23, 23, 0.5)',
            },
          }}
        >
          <FaGithub size={24} />
        </Box>
      </Box>
    </Box>
  );
};

export default AvatarComp;