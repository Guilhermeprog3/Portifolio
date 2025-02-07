import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import foto_universo from "../../assets/foto_universo.png";

const cards = [
  {
    title: 'Build a Spotify Connected App',
    description: 'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.',
    date: 'January 2023',
    tags: ['Front-End', 'Mobile'],
    image: [foto_universo, foto_universo, foto_universo],
    link: '#',
  },
  // Outros cards...
];

const filterOptions = ['All', 'Front-End', 'Back-End', 'Web Design', 'Mobile'];

export default function CardsGrid() {
  const [filter, setFilter] = React.useState('All');
  const [search, setSearch] = React.useState('');

  const handleFilterChange = (event) => {
    setFilter(event);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const filteredCards = cards.filter((card) => {
    if (filter === 'All') return true;
    return card.tags.includes(filter);
  }).filter((card) => {
    return card.title.toLowerCase().includes(search) || card.description.toLowerCase().includes(search);
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        padding: '40px 40px',
        color: '#ffffff',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          marginBottom: '32px',
          fontWeight: '800',
          textAlign: 'center',
          color: '#ffffff',
          background: 'linear-gradient(90deg, #64ffda, #1db954)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0px 4px 10px rgba(100, 255, 218, 0.3)',
        }}
      >
        My Projects
      </Typography>

      {/* Search and Filters */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '32px', gap: '16px', flexDirection: 'column' }}>
        <TextField
          variant="outlined"
          placeholder="Search projects..."
          onChange={handleSearchChange}
          sx={{
            width: '50%',
            input: {
              color: '#ffffff',
              backgroundColor: '#1a1a2e',
              borderRadius: '12px',
              paddingLeft: '16px',
            },
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#64ffda',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#64ffda',
            },
            '.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#64ffda',
            },
            '& .MuiInputBase-root': {
              height: '50px',
            },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {filterOptions.map((option) => (
            <Button
              key={option}
              onClick={() => handleFilterChange(option)}
              variant={option === filter ? 'contained' : 'outlined'}
              sx={{
                textTransform: 'none',
                backgroundColor: option === filter ? '#64ffda' : 'transparent',
                color: option === filter ? '#1a1a2e' : '#64ffda',
                fontWeight: '600',
                border: '2px solid #64ffda',
                borderRadius: '24px',
                padding: '10px 24px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: option === filter ? '#64ffda' : 'rgba(100, 255, 218, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0px 4px 15px rgba(100, 255, 218, 0.3)',
                },
              }}
            >
              {option}
            </Button>
          ))}
        </Box>
      </Box>

      <Grid container spacing={4}>
        {filteredCards.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '16px',
                backgroundColor: '#1a1a2e',
                color: '#ffffff',
                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 12px 32px rgba(100, 255, 218, 0.4)',
                },
              }}
            >
              <Slider {...settings}>
                {card.image.map((img, imgIndex) => (
                  <Box
                    key={imgIndex}
                    component="img"
                    src={img}
                    alt={card.title}
                    sx={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '16px',
                      borderTopRightRadius: '16px',
                    }}
                  />
                ))}
              </Slider>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '800',
                    marginBottom: '12px',
                    color: '#64ffda',
                    textShadow: '0px 2px 4px rgba(100, 255, 218, 0.3)',
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#a8b2d1',
                    marginBottom: '8px',
                    fontWeight: '500',
                  }}
                >
                  {card.date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#a8b2d1',
                    marginBottom: '20px',
                    fontWeight: '400',
                  }}
                >
                  {card.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {card.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      sx={{
                        backgroundColor: '#233554',
                        color: '#64ffda',
                        fontWeight: '600',
                        borderRadius: '12px',
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  padding: '16px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  variant="outlined"
                  href={card.link}
                  sx={{
                    textTransform: 'none',
                    border: '2px solid #64ffda',
                    color: '#64ffda',
                    fontWeight: '600',
                    borderRadius: '24px',
                    padding: '8px 24px',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0px 4px 15px rgba(100, 255, 218, 0.3)',
                    },
                  }}
                >
                  View in GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}