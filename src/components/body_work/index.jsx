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
// import MenuItem from '@mui/material/MenuItem';
import foto_universo from "../../assets/foto_universo.png"

const cards = [
  {
    title: 'Build a Spotify Connected App',
    description:
      'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.',
    date: 'January 2023',
    tags: ['Front-End'],
    image: foto_universo,
    link: '#',
  },
  {
    title: 'Spotify Profile',
    description: 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.',
    date: 'February 2023',
    tags: ['Front-End', 'Web Design'],
    image: foto_universo,
    link: '#',
  },
  {
    title: 'Halcyon Theme',
    description:
      'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
    date: 'March 2023',
    tags: ['Web Design'],
    image: foto_universo,
    link: '#',
  },
];

const filterOptions = ['All', 'Front-End', 'Back-End', 'Web Design'];

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

  return (
    <Box
      sx={{
        minHeight: '100vh',
        padding: '40px 20px',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          marginBottom: '32px',
          fontWeight: '600',
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        My Projects
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '24px', gap: '16px' }}>
        <TextField
          variant="outlined"
          placeholder="Search projects..."
          onChange={handleSearchChange}
          sx={{
            input: {
              color: '#ffffff',
              backgroundColor: '#1a1a2e',
              borderRadius: '4px',
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
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        {filterOptions.map((option) => (
          <Button
            key={option}
            onClick={() => handleFilterChange(option)}
            variant={option === filter ? 'contained' : 'outlined'}
            sx={{
              marginRight: '8px',
              textTransform: 'none',
              backgroundColor: option === filter ? '#64ffda' : '#1a1a2e',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: option === filter ? '#64ffda' : 'rgba(100, 255, 218, 0.1)',
              },
              borderColor: '#64ffda',
            }}
          >
            {option}
          </Button>
        ))}
      </Box>
      <Grid container spacing={4}>
        {filteredCards.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                borderRadius: '12px',
                backgroundColor: '#112240',
                color: '#ffffff',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Box
                component="img"
                src={card.image}
                alt={card.title}
                sx={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    marginBottom: '12px',
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#a8b2d1',
                    marginBottom: '8px',
                  }}
                >
                  {card.date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#a8b2d1',
                    marginBottom: '20px',
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
                        fontWeight: '500',
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
                    borderColor: '#64ffda',
                    color: '#64ffda',
                    fontWeight: 'bold',
                    borderRadius: '24px',
                    padding: '8px 16px',
                    '&:hover': {
                      borderColor: '#64ffda',
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
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
