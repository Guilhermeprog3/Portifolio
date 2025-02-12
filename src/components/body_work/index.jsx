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
import Modal from '@mui/material/Modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import alterar_senha_front_task from "../../assets/alterar_senha_front_task.png";
import criar_front_task from "../../assets/criar_front_task.png";
import criar_recipes from "../../assets/criar_recipes.png";
import criar_task from "../../assets/criar_task.png";
import hidro_watch_home from "../../assets/hidro_watch_home.png";
import hidro_watch_medicao from "../../assets/hidro_watch_medição.png";
import hidro_watch_login from "../../assets/hidro-watch_login.png";
import home_eccomerce2 from "../../assets/home_eccomerce2.png";
import home_eccomerce from "../../assets/home_eccomerce.png";
import home_front_task from "../../assets/home_front_task.png";
import home_recipes from "../../assets/home_recipes.png";
import login_Eccomerce from "../../assets/login_Eccomerce.png";
import login_front_task from "../../assets/login_front_task.png";
import login_recipes from "../../assets/login_recipes.png";
import login_task from "../../assets/login_task.png";
import pasta_task from "../../assets/pasta_task.png";
import pesquisa_eccomerce from "../../assets/pesquisa_eccomerce.png";
import prototipo_criar_recipes from "../../assets/prototipo_criar_recipes.png";
import prototipo_home_recipes from "../../assets/prototipo_home_recipes.png";
import prototipo_login_task from "../../assets/prototipo_login_task.png";
import prototipo_task from "../../assets/prototipo_task.png";
import Receita_2 from "../../assets/Receita (2).png";
import recuperar_senha_task from "../../assets/recuperar_senha_task.png";
import task from "../../assets/task.png";
import user_eccomerce from "../../assets/user_eccomerce.png";


const cards = [
  {
    title: 'Create Recipes App',
    description: 'Building a recipe app using React and Node.js. Users can create and manage recipes, search for them, and share with friends.',
    date: 'February 2025',
    tags: ['Front-End'],
    technologies: ['React', 'Node.js', 'Express'],
    image: [criar_recipes, home_recipes,login_recipes,Receita_2],
    link: '#',
  },
  {
    title: 'Task Management',
    description: 'A web app for managing tasks, creating new tasks, and organizing them into projects with user authentication and real-time updates.',
    date: 'January 2025',
    tags: ['Front-End'],
    technologies: ['React', 'Node.js', 'Express'],
    image: [login_task,task,criar_task,pasta_task,recuperar_senha_task],
    link: '#',
  },
  {
    title: 'Hidro Watch - Prototipo',
    description: 'A monitoring tool for water usage with a dashboard that displays data for users.',
    date: 'Dezembre 2024',
    tags: ['Web Design'],
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: [hidro_watch_home, hidro_watch_medicao, hidro_watch_login],
    link: '#',
  },
  {
    title: 'Prototype - Recipes Creation',
    description: 'A prototype for creating and managing recipes with a visually appealing user interface.',
    date: 'February 2025',
    tags: ['Web Design'],
    technologies: ['React', 'Figma'],
    image: [prototipo_home_recipes,prototipo_criar_recipes, ],
    link: '#',
  },
  {
    title: 'Prototype - Task Management',
    description: 'A task management prototype to visualize how users can organize tasks and projects.',
    date: 'January 2025',
    tags: ['Web Design'],
    technologies: ['React', 'Figma'],
    image: [prototipo_task, prototipo_login_task],
    link: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'Building a full-fledged e-commerce platform with user authentication, product management, and payment gateway.',
    date: 'May 2023',
    tags: ['Front-End'],
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: [login_Eccomerce,home_eccomerce,home_eccomerce2, pesquisa_eccomerce,user_eccomerce],
    link: '#',
  },
  {
    title: 'Task-App',
    description: 'A task management platform where users can create and manage their tasks efficiently with features like due dates and categories.',
    date: 'March 2024',
    tags: ['Front-End'],
    technologies: ['React', 'Node.js', 'Express'],
    image: [criar_front_task, home_front_task, login_front_task,alterar_senha_front_task],
    link: '#',
  },
];

const filterOptions = ['All', 'Front-End', 'Back-End', 'Web Design', 'Mobile'];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '800px',
  bgcolor: '#1a1a2e',
  color: '#ffffff',
  borderRadius: '16px',
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)',
  p: 4,
  outline: 'none',
};

export default function CardsGrid() {
  const [filter, setFilter] = React.useState('All');
  const [search, setSearch] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleFilterChange = (event) => {
    setFilter(event);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCard(null);
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
              onClick={() => handleCardClick(card)}
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
                  cursor: 'pointer',
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
                      height: '300px',
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
                
                <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
                  {card.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      sx={{
                        backgroundColor: '#233554',
                        color: '#a8b2d1',
                        fontWeight: '500',
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

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          {selectedCard && (
            <>
              <Typography id="modal-modal-title" variant="h4" sx={{ fontWeight: '800', color: '#64ffda', marginBottom: '16px' }}>
                {selectedCard.title}
              </Typography>
              <Typography id="modal-modal-description" variant="body1" sx={{ color: '#a8b2d1', marginBottom: '16px' }}>
                {selectedCard.description}
              </Typography>
              <Typography variant="body2" sx={{ color: '#a8b2d1', marginBottom: '16px' }}>
                <strong>Date:</strong> {selectedCard.date}
              </Typography>
              <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {selectedCard.tags.map((tag, tagIndex) => (
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
              <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {selectedCard.technologies.map((tech, techIndex) => (
                  <Chip
                    key={techIndex}
                    label={tech}
                    sx={{
                      backgroundColor: '#233554',
                      color: '#a8b2d1',
                      fontWeight: '500',
                      borderRadius: '12px',
                    }}
                  />
                ))}
              </Box>
              <Button
                variant="outlined"
                href={selectedCard.link}
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
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}