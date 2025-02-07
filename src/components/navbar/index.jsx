// import React from "react";
import { AppBar, Toolbar, Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        minHeight: '80px',
        backgroundColor: 'transparent',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0 2rem" }}>

          {/* Box da esquerda */}
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                position: 'relative',
                '&:hover': {
                  color: "#64ffda",
                  '&::after': {
                    width: '100%',
                  },
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: '0%',
                  height: 2,
                  backgroundColor: '#64ffda',
                  transition: 'width 0.3s',
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/about"
              color="inherit"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                position: 'relative',
                '&:hover': {
                  color: "#64ffda",
                  '&::after': {
                    width: '100%',
                  },
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: '0%',
                  height: 2,
                  backgroundColor: '#64ffda',
                  transition: 'width 0.3s',
                },
              }}
            >
              About
            </Button>
          </Box>

          {/* Logotipo central */}
          <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "50px", width: "60px", borderRadius: "50%", boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
            />
          </Box>

          {/* Box da direita */}
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <Button
              component={Link}
              to="/work"
              color="inherit"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                position: 'relative',
                '&:hover': {
                  color: "#64ffda",
                  '&::after': {
                    width: '100%',
                  },
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: '0%',
                  height: 2,
                  backgroundColor: '#64ffda',
                  transition: 'width 0.3s',
                },
              }}
            >
              Work
            </Button>
            <Button
              component={Link}
              to="/contact"
              color="inherit"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                position: 'relative',
                '&:hover': {
                  color: "#64ffda",
                  '&::after': {
                    width: '100%',
                  },
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: '0%',
                  height: 2,
                  backgroundColor: '#64ffda',
                  transition: 'width 0.3s',
                },
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
