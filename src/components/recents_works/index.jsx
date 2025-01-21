import { useState } from 'react';
import { Box, Button, Grid, Typography } from "@mui/material";
import foto_universo from '../../assets/foto_universo.png';

const RecentWorks = () => {
  const categories = ["All", "Front-End", "Back-End", "Web Design"];
  const cards = [
    {
      tags: ['Front-End'],
      image: foto_universo,
    },
    {
      tags: ['Front-End', 'Web Design'],
      image: foto_universo,
    },
    {
      tags: ['Web Design'],
      image: foto_universo,
    },
    {
      tags: ['Back-End'],
      image: foto_universo,
    },
  ];

  const [filter, setFilter] = useState('All');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredCards = cards.filter((card) => {
    if (filter === 'All') return true;
    return card.tags.includes(filter);
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
            onClick={() => handleFilterChange(category)}
            sx={{
              backgroundColor: category === filter ? "#64ffda" : "#1a1a2e",
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
        {filteredCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                background: "#112240",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <img
                src={card.image}
                alt="Work"
                style={{
                  width: "100%",
                  display: "block",
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
              />
              <Box
                sx={{
                  padding: "15px",
                  textAlign: 'left',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "8px",
                    color: '#64ffda',
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#a8b2d1",
                    marginBottom: "10px",
                  }}
                >
                  {card.description}
                </Typography>
                <Button
                  variant="outlined"
                  href={card.link}
                  sx={{
                    textTransform: "none",
                    borderColor: "#64ffda",
                    color: "#64ffda",
                    fontWeight: "bold",
                    borderRadius: "24px",
                    padding: "8px 16px",
                    '&:hover': {
                      borderColor: "#64ffda",
                      backgroundColor: "rgba(100, 255, 218, 0.1)",
                    },
                  }}
                >
                  Saiba mais →
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecentWorks;
