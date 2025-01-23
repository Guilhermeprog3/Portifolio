// import React from 'react';
import { Box, TextField, Button, Typography, Grid, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const ContactBody = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: '90vh',
        width:"50%",
        justifyContent:"center"
      }}
    >
      

      {/* Seção do formulário */}
      <Paper
        elevation={25}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: 2, md: 4 },
          m: 2,
          background: 'linear-gradient(to bottom, rgba(0, 46, 114, 0.8), rgba(41, 11, 92, 0.9))',
          borderRadius: '16px',
          boxShadow: '0px 0px 20px rgba(0,0,0,0.5)',
          zIndex:1,
          width:"10%"
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: '#ffffff',
            mb: 3,
            textAlign: 'center',
            zIndex:"1",
            fontWeight: "bold",
          marginBottom: "20px",
          background: "linear-gradient(90deg, #64ffda, #1db954)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: '0px 0px 10px #000000',
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
                },
                boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
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
                },
                boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
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
                },
                boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
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
                },
                boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
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
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
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
