import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import LOGO from "../Assets/img/LOGO2.png";
import styled from "styled-components";

const Logo = styled.div`
  width: 10rem; /* Adjust as per your logo size */
  height: 5rem; /* Adjust as per your logo size */
  margin-top: 1rem;
  background: url(${LOGO});
  background-repeat: no-repeat;
  background-size: contain;
`;

const NavBar = () => {
  const [activeButton, setActiveButton] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.substring(1);
    setActiveButton(currentPath);
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path);
    setActiveButton(path.substring(1));
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', height: "5rem", boxShadow: '0 4px 8px rgba(255, 215, 0, 0.7)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Logo />
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: "2rem" }}>
          <Button
            sx={{
              color: 'inherit',
              '&:hover': { backgroundColor: activeButton === 'home' ? 'gold' : 'transparent' },
              backgroundColor: activeButton === 'home' ? 'gold' : 'transparent'
            }}
            onClick={() => handleNavigation('/home')}
          >
            Home
          </Button>
          <Button
            sx={{
              color: 'inherit',
              '&:hover': { backgroundColor: activeButton === 'academy' ? 'gold' : 'transparent' },
              backgroundColor: activeButton === 'academy' ? 'gold' : 'transparent'
            }}
            onClick={() => handleNavigation('/academy')}
          >
            Academy
          </Button>
          <Button
            sx={{
              color: 'inherit',
              '&:hover': { backgroundColor: activeButton === 'why-choose-us' ? 'gold' : 'transparent' },
              backgroundColor: activeButton === 'why-choose-us' ? 'gold' : 'transparent'
            }}
            onClick={() => handleNavigation('/why-choose-us')}
          >
            Why Choose Us
          </Button>
          <Button
            sx={{
              color: 'inherit',
              '&:hover': { backgroundColor: activeButton === 'our-service' ? 'gold' : 'transparent' },
              backgroundColor: activeButton === 'our-service' ? 'gold' : 'transparent'
            }}
            onClick={() => handleNavigation('/our-service')}
          >
            Our Services
          </Button>
          <Button
            sx={{
              color: 'inherit',
              '&:hover': { backgroundColor: activeButton === 'blog' ? 'gold' : 'transparent' },
              backgroundColor: activeButton === 'blog' ? 'gold' : 'transparent'
            }}
            onClick={() => handleNavigation('/blog')}
          >
            Blog
          </Button>
          <Button
            sx={{
              color: 'inherit',
              '&:hover': { backgroundColor: activeButton === 'careers' ? 'gold' : 'transparent' },
              backgroundColor: activeButton === 'careers' ? 'gold' : 'transparent'
            }}
            onClick={() => handleNavigation('/careers')}
          >
            Careers
          </Button>
          <Button
            sx={{
              color: 'inherit',
              '&:hover': { backgroundColor: activeButton === 'faq' ? 'gold' : 'transparent' },
              backgroundColor: activeButton === 'faq' ? 'gold' : 'transparent'
            }}
            onClick={() => handleNavigation('/faq')}
          >
            FAQ
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
