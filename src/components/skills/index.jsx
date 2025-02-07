import { Box, Typography, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const About_Skills = () => {
  return (
    <Box
      sx={{
        padding: { xs: 4, md: 8 },
        position: "relative",
        color: "#ffffff",
        zIndex: 1,
        background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        borderRadius: '16px',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(100, 255, 218, 0.2)',
        margin: { xs: 2, md: 4 },
      }}
    >
      {/* Título Principal */}
      <Typography
        variant="h3"
        sx={{ 
          textAlign: "center", 
          marginBottom: 4, 
          fontWeight: "800", 
          background: "linear-gradient(90deg, #64ffda, #1db954)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: '0px 4px 10px rgba(100, 255, 218, 0.3)',
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
              fontWeight: '600',
            }}
          >
            Linguagem
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1, color: "#a8b2d1" }}>
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
          <Typography variant="body1" sx={{ marginBottom: 1, color: "#a8b2d1" }}>
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
              fontWeight: '600',
            }}
          >
            Formação
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="Sistemas Para Internet" sx={{ color: "#a8b2d1" }} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="Eletroeletrônica" sx={{ color: "#a8b2d1" }} />
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
              fontWeight: '600',
            }}
          >
            Estudando
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="Christ University" sx={{ color: "#a8b2d1" }} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="Christ University" sx={{ color: "#a8b2d1" }} />
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
              fontWeight: '600',
            }}
          >
            Domínio
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="DESENVOLVIMENTO WEB" sx={{ color: "#a8b2d1" }} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="DESENVOLVIMENTO MOBILE" sx={{ color: "#a8b2d1" }} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#64ffda" }} />
              </ListItemIcon>
              <ListItemText primary="DESIGN" sx={{ color: "#a8b2d1" }} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About_Skills;