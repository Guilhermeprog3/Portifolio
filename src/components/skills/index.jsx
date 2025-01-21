import { Box, Typography, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const About_Skills = () => {
  return (
    <Box
      sx={{
        padding: 6,
        position: "relative",
        color: "#ffffff",
        zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(0, 46, 114, 0.8), rgba(41, 11, 92, 0.9))',
      }}
    >
      {/* Título Principal */}
      <Typography
        variant="h3"
        sx={{ 
          textAlign: "center", 
          marginBottom: 4, 
          fontWeight: "bold", 
          color: "#64ffda", 
          textShadow: '0px 0px 10px #000000',
          background: "linear-gradient(90deg, #64ffda, #1db954)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My <span style={{ color: "#64ffda" }}>Skills</span>
      </Typography>

      {/* Grid para as seções */}
      <Grid container spacing={6}>
        
        {/* Seção de Linguagem */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h5" 
            sx={{ 
              marginBottom: 2, 
              borderBottom: "2px solid #64ffda", 
              color: "#64ffda",
              paddingBottom: 1,
            }}
          >
            Linguagem
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1, color: "#e0e1dd" }}>
            Português
          </Typography>
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{
              height: 10,
              borderRadius: 5,
              background: "#233554",
              "& .MuiLinearProgress-bar": {
                background: "linear-gradient(to right, #64ffda, #1c658c)",
              },
              marginBottom: 2,
            }}
          />
          <Typography variant="body1" sx={{ marginBottom: 1, color: "#e0e1dd" }}>
            Inglês
          </Typography>
          <LinearProgress
            variant="determinate"
            value={60}
            sx={{
              height: 10,
              borderRadius: 5,
              background: "#233554",
              "& .MuiLinearProgress-bar": {
                background: "linear-gradient(to right, #64ffda, #1c658c)",
              },
            }}
          />
        </Grid>

        {/* Seção de Formação */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h5" 
            sx={{ 
              marginBottom: 2, 
              borderBottom: "2px solid #64ffda", 
              color: "#64ffda",
              paddingBottom: 1,
            }}
          >
            Formação
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="Sistemas Para Internet" sx={{ color: "#e0e1dd" }} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="Eletroeletrônica" sx={{ color: "#e0e1dd" }} />
            </ListItem>
          </List>
        </Grid>

        {/* Seção de Estudando */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h5" 
            sx={{ 
              marginBottom: 2, 
              borderBottom: "2px solid #64ffda", 
              color: "#64ffda",
              paddingBottom: 1,
            }}
          >
            Estudando
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="Christ University" sx={{ color: "#e0e1dd" }} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="Christ University" sx={{ color: "#e0e1dd" }} />
            </ListItem>
          </List>
        </Grid>

        {/* Seção de Domínio */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h5" 
            sx={{ 
              marginBottom: 2, 
              borderBottom: "2px solid #64ffda", 
              color: "#64ffda",
              paddingBottom: 1,
            }}
          >
            Domínio
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="DESENVOLVIMENTO WEB" sx={{ color: "#e0e1dd" }} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="DESENVOLVIMENTO MOBILE" sx={{ color: "#e0e1dd" }} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="DESIGN" sx={{ color: "#e0e1dd" }} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About_Skills;
