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
        padding: 4,
        zIndex: 1,
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
          marginBottom: 2,
        }}
      />
      <Typography
        variant="h5"
        sx={{ color: "#64ffda", marginBottom: 1, zIndex: 1, textShadow: '0px 0px 10px #000000' }}
      >
        Hello! I Am <span style={{ color: "#ffffff" }}>Guilherme</span>
      </Typography>

      {/* Title Section */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "start",
          marginBottom: 1,
          color: "#ffffff",
          zIndex: 1,
          textShadow: '0px 0px 10px #000000',
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
          textShadow: '0px 0px 5px #000000',
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
          textShadow: '0px 0px 5px #000000',
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
