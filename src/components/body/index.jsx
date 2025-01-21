// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Tooltip } from "@mui/material";
import { Download } from "@mui/icons-material";
import { DiRuby, DiMysql } from "react-icons/di";
import { FaReact, FaNode, FaPython, FaHtml5, FaCss3, FaJs, FaGithub, FaDocker, FaFigma, FaNpm } from "react-icons/fa";
import { SiVite, SiPostgresql, SiNestjs, SiExpress, SiTypescript, SiAdonisjs, SiArduino } from "react-icons/si";
import Next from '../../assets/Next.png';

const iconStyle = {
  width: 40,
  height: 40,
  backgroundColor: '#233554',
  borderRadius: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  color: '#ffffff',
  transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: '#64ffda',
    color: '#233554',
    cursor: 'pointer',
    transform: 'scale(1.1)',
  },
};

const iconsWithStyles = [
  { title: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
  { title: 'CSS3', Icon: FaCss3, color: '#1572B6' },
  { title: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
  { title: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { title: 'Node.js', Icon: FaNode, color: '#83CD29' },
  { title: 'React/React Native', Icon: FaReact, color: '#61DBFB' },
  { title: 'Vite', Icon: SiVite, color: '#646CFF' },
  { title: 'Express', Icon: SiExpress, color: '#000000' },
  { title: 'Docker', Icon: FaDocker, color: '#2496ED' },
  { title: 'AdonisJS', Icon: SiAdonisjs, color: '#2B7A78' },
  { title: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  { title: 'MySQL', Icon: DiMysql, color: '#4479A1' },
  { title: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
  { title: 'Python', Icon: FaPython, color: '#FFD43B' },
  { title: 'GitHub', Icon: FaGithub, color: '#181717' },
  { title: 'NPM', Icon: FaNpm, color: '#CB3837' },
  { title: 'Ruby', Icon: DiRuby, color: '#CC342D' },
  { title: 'Figma', Icon: FaFigma, color: '#F24E1E' },
  { title: 'Arduino', Icon: SiArduino, color: '#00979D' },
];

const titles = ['Student', 'Software Engineer', 'Web Designer', 'Full-Stack Developer'];

const Body = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 75 : 150;
    const currentTitle = titles[index];

    const timeoutId = setTimeout(() => {
      setDisplayedText(prevText => {
        if (isDeleting) {
          if (prevText.length === 0) {
            setIsDeleting(false);
            setIndex((index + 1) % titles.length);
            return '';
          }
          return prevText.slice(0, -1);
        } else {
          if (prevText.length === currentTitle.length) {
            setIsDeleting(true);
            return prevText;
          }
          return currentTitle.slice(0, prevText.length + 1);
        }
      });
    }, typeSpeed);

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, index]);

  return (
    <Box
      sx={{
        color: "#ffffff",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        padding: 3,
        textAlign: "start",
        borderRadius: '16px',
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2, color: "#64ffda", textShadow: '0px 0px 10px #000000' }}>
        WHO AM I ?
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        I&apos;m Guilherme Silva Rios, <span style={{ color: "#64ffda" }}>{displayedText}</span>
      </Typography>

      <Typography
        variant="body1"
        sx={{
          textAlign: "start",
          maxWidth: 600,
          marginBottom: 4,
          color: '#a8b2d1',
          textShadow: '0px 0px 5px #000000',
        }}
      >
        I am an ambitious Internet Systems student with a passion for web, mobile, and desktop development. I have 
        a solid understanding of various programming languages and frameworks, allowing me to create intuitive and 
        dynamic digital solutions. My dedication and problem-solving skills make me a promising talent in the tech industry.
      </Typography>

      <Box sx={{ display: "flex", gap: 2, marginBottom: 4, flexWrap: "wrap", width: "65%" }}>
        {iconsWithStyles.map(({ title, Icon, color }) => (
          <Tooltip title={title} key={title}>
            <Box sx={{ ...iconStyle, '&:hover': { backgroundColor: color, color: 'white', transform: 'scale(1.1)' } }}>
              <Icon size={24} />
            </Box>
          </Tooltip>
        ))}
        <Tooltip title="Next.js">
          <Box sx={{ ...iconStyle, '&:hover': { backgroundColor: '#000', color: 'white', transform: 'scale(1.1)' } }}>
            <img src={Next} alt="Next.js" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }} />
          </Box>
        </Tooltip>
      </Box>

      <Box sx={{ display: "flex", gap: 2, marginBottom: 4 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#000000",
            color: "#ffffff",
            padding: "12px 50px",
            textTransform: "none",
            borderRadius: "40px",
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: "#64ffda",
              color: "#000000",
              boxShadow: '0 6px 16px rgba(0, 0, 0, 0.6)',
            },
          }}
        >
          CONTACT-ME
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{
            color: "#ffffff",
            borderColor: "#ffffff",
            padding: "12px 50px",
            textTransform: "none",
            borderRadius: "40px",
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: "#64ffda",
              color: "#000000",
              borderColor: "#64ffda",
              boxShadow: '0 6px 16px rgba(255, 255, 255, 0.6)',
            },
          }}
          startIcon={<Download />}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
};

export default Body;
