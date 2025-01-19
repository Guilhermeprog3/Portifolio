import { Box, Button, Grid, Typography } from "@mui/material";
import foto_universo from '../../assets/foto_universo.png';
const RecentWorks = () => {
  const categories = ["All", "Front-End", "Back-End", "Web Design"];
  const works = Array(4).fill({
    image: foto_universo,
    icon: "https://via.placeholder.com/50", 
  });

  return (
    <Box
      sx={{
        padding: "40px 20px",
        color: "#ffffff",
        textAlign: "center",
        minHeight: '100vh',
        marginTop:"2%"
      }}
    >
      {/* Título */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          background: "linear-gradient(90deg, #64ffda, #1db954)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: '0px 0px 10px #000000',
        }}
      >
        My Recent Works
      </Typography>

      {/* Filtros */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        {categories.map((category, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              backgroundColor: category === "All" ? "#64ffda" : "#1a1a2e",
              borderRadius: "20px",
              textTransform: "none",
              padding: "10px 20px",
              color: "#ffffff",
              borderColor: "#64ffda",
              '&:hover': {
                backgroundColor: '#64ffda',
                color: '#1a1a2e',
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Grid de Cards */}
      <Grid container spacing={4} justifyContent="center">
        {works.map((work, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                background: "#112240",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              <img
                src={work.image}
                alt="Work"
                style={{ width: "100%", display: "block" }}
              />
              <img
                src={work.icon}
                alt="Icon"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Botão Saiba Mais */}
      <Box sx={{ marginTop: "30px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#64ffda",
            borderRadius: "20px",
            padding: "10px 30px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#0a192f",
            '&:hover': {
              backgroundColor: "#1db954",
              color: '#ffffff',
            },
          }}
        >
          Saiba mais →
        </Button>
      </Box>
    </Box>
  );
};

export default RecentWorks;
