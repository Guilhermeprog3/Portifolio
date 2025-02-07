import { useState } from 'react';
import { Box, Button, Grid, Typography } from "@mui/material";
import foto_universo from '../../assets/foto_universo.png';

const RecentWorks = () => {
  const categories = ["All", "Front-End", "Back-End", "Web Design", "Mobile"];
  const cards = [
    {
      tags: ['Front-End'],
      image: foto_universo,
      title: "Projeto Front-End",
      description: "Desenvolvimento de interfaces modernas e responsivas.",
      link: "#"
    },
    {
      tags: ['Front-End', 'Web Design'],
      image: foto_universo,
      title: "Projeto Web Design",
      description: "Criação de designs atraentes e intuitivos.",
      link: "#"
    },
    {
      tags: ['Web Design'],
      image: foto_universo,
      title: "Projeto Design",
      description: "Designs que impressionam e engajam.",
      link: "#"
    },
    {
      tags: ['Back-End'],
      image: foto_universo,
      title: "Projeto Back-End",
      description: "Sistemas robustos e escaláveis.",
      link: "#"
    },
    {
      tags: ['Mobile'],
      image: foto_universo,
      title: "Projeto Mobile",
      description: "Aplicativos móveis inovadores e eficientes.",
      link: "#"
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
        marginTop: "2%",
      }}
    >
      {/* Título */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "40px",
          background: "linear-gradient(90deg, #64ffda, #1db954)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: '0px 0px 10px rgba(100, 255, 218, 0.7)',
          fontSize: '2.5rem',
          letterSpacing: '2px',
        }}
      >
        My Recent Works
      </Typography>

      {/* Filtros */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "40px",
          flexWrap: 'wrap',
        }}
      >
        {categories.map((category, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={() => handleFilterChange(category)}
            sx={{
              backgroundColor: category === filter ? "#64ffda" : "#1a1a2e",
              borderRadius: "25px",
              textTransform: "none",
              padding: "12px 24px",
              color: category === filter ? "#1a1a2e" : "#ffffff",
              border: '2px solid #64ffda',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: '#64ffda',
                color: '#1a1a2e',
                transform: 'translateY(-3px)',
                boxShadow: '0px 4px 15px rgba(100, 255, 218, 0.4)',
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
                borderRadius: "15px",
                overflow: "hidden",
                position: "relative",
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 25px rgba(100, 255, 218, 0.6)',
                },
              }}
            >
              <img
                src={card.image}
                alt="Work"
                style={{
                  width: "100%",
                  display: "block",
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                }}
              />
              <Box
                sx={{
                  padding: "20px",
                  textAlign: 'left',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  borderBottomLeftRadius: '15px',
                  borderBottomRightRadius: '15px',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "12px",
                    color: '#64ffda',
                    fontSize: '1.25rem',
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#a8b2d1",
                    marginBottom: "15px",
                    fontSize: '0.9rem',
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
                    padding: "10px 20px",
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      borderColor: "#64ffda",
                      backgroundColor: "rgba(100, 255, 218, 0.1)",
                      transform: 'translateY(-2px)',
                      boxShadow: '0px 4px 10px rgba(100, 255, 218, 0.3)',
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
