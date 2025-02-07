import { Box, Typography, Avatar } from "@mui/material";
import PROFILE_IMG from '../../assets/PROFILE_IMG.jpeg';

const About_body = () => {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        padding: { xs: 4, md: 8 },
        margin: { xs: 2, md: 4 },
      }}
    >
      {/* Avatar Section */}
      <Avatar
        src={PROFILE_IMG}
        alt="Guilherme"
        sx={{
          width: 200,
          height: 200,
          border: "4px solid #64ffda",
          marginBottom: 3,
          boxShadow: '0px 4px 20px rgba(100, 255, 218, 0.5)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />

      {/* Title Section */}
      <Typography
        variant="h5"
        sx={{
          color: "#64ffda",
          marginBottom: 1,
          zIndex: 1,
          textShadow: '0px 4px 10px rgba(100, 255, 218, 0.3)',
          fontWeight: '600',
        }}
      >
        Hello! I Am <span style={{ color: "#ffffff" }}>Guilherme</span>
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: "800",
          textAlign: "start",
          marginBottom: 2,
          color: "#ffffff",
          zIndex: 1,
          textShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
          background: 'linear-gradient(90deg, #64ffda, #1db954)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        I&apos;m An Internet Systems Student.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#64ffda",
          textAlign: "start",
          marginBottom: 3,
          zIndex: 1,
          textShadow: '0px 4px 10px rgba(100, 255, 218, 0.3)',
          fontWeight: '600',
        }}
      >
        Currently, I&apos;m a Software Engineer
      </Typography>

      <Typography
        variant="body1"
        sx={{
          textAlign: "start",
          maxWidth: 600,
          lineHeight: 1.6,
          color: "#a8b2d1",
          zIndex: 1,
          textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make
        meaningful and delightful digital products that create an equilibrium between user needs
        and business goals.
      </Typography>
    </Box>
  );
};

export default About_body;