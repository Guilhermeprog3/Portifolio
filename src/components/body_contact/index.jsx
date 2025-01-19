// import React from 'react';
import { Box, TextField, Button, Typography, Grid, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import foto_universo from '../../assets/foto_universo.png'

const ContactBody = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: '90vh',
      }}
    >
      {/* Seção da imagem */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${foto_universo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex:'1'
        }}
      ></Box>

      {/* Seção do formulário */}
      <Paper
        elevation={20}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: 2, md: 4 },
          m: 2,
          background: 'linear-gradient(135deg, #0d1b2a, #1b263b)',
          borderRadius: '16px',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: '#ffffff',
            mb: 3,
            fontWeight: 'bold',
            textAlign: 'center',
            zIndex:"1"
          }}
        >
          Send me a message
        </Typography>
        <Grid container spacing={2} sx={{ maxWidth: '600px' }}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              sx={{
                background: '#22303c',
                color: 'white',
                borderRadius: 1,
                '.MuiInputBase-input': {
                  color: 'white'
                }
              }}
              InputLabelProps={{
                sx: {
                  color: 'white',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              sx={{
                background: '#22303c',
                color: 'white',
                borderRadius: 1,
                '.MuiInputBase-input': {
                  color: 'white'
                }
              }}
              InputLabelProps={{
                sx: {
                  color: 'white',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              sx={{
                background: '#22303c',
                color: 'white',
                borderRadius: 1,
                '.MuiInputBase-input': {
                  color: 'white'
                }
              }}
              InputLabelProps={{
                sx: {
                  color: 'white',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Your message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{
                background: '#22303c',
                color: 'white',
                borderRadius: 1,
                '.MuiInputBase-input': {
                  color: 'white'
                }
              }}
              InputLabelProps={{
                sx: {
                  color: 'white',
                },
              }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            mt: 4,
            px: 5,
            py: 1.8,
            fontWeight: 'bold',
            fontSize: '1rem',
            background: 'linear-gradient(90deg, #00796b, #004d40)',
            transition: 'background 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(90deg,rgb(3, 62, 52),rgb(9, 140, 111))',
            },
          }}
          endIcon={<SendIcon />}
        >
          Send message
        </Button>
      </Paper>
    </Box>
  );
};

export default ContactBody;
