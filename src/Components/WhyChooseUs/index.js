// src/Components/Home.js
// import React, { useRef } from 'react';
import NavBar from '../Tools/NavBar';
import { Box, Card, Typography } from '@mui/material';
import OFFICECHAIRS from '../Assets/img/OFFICE_CHAIR.jpg'


function WhyChooseUs() {

  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', overflowY: 'auto' }}>
      <NavBar />
      <Box sx={{ boxShadow: '0 4px 8px rgba(255, 215, 0, 0.7)', height: "47rem", padding: '2rem' }}>
        <Card sx={{
          maxWidth: { xl: '105rem' },
          margin: '0 auto',
          borderRadius: '1rem',
          backgroundColor: 'white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: '0.3s',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          },
          height: '100%',  // Ensure the card takes full height of the container
          position: 'relative',  // Required for absolute positioning of text
          overflow: 'hidden'
        }}>
          <img src={OFFICECHAIRS} alt='OFFICECHAIR' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <Box sx={{
            fontWeight: 'bold',
            position: 'absolute',
            top: {xl: '40%'},
            left: {xl: '50%'},
            transform: 'translate(-50%, -50%)',
            color: 'white',  // Change text color to stand out against the image
            // backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Optional: Add a semi-transparent background for better visibility
            padding: '1rem',
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <Typography variant="h4" sx={{
              fontSize: {xl: 65}
            }}>Our Credo</Typography>
          </Box>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',  // Change text color to stand out against the image
            // backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Optional: Add a semi-transparent background for better visibility
            padding: '1rem',
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <Typography variant="h4"sx={{
              fontSize: {xl: 25} }}>We believe in having solid foundations and guiding principles. This is the credo that puts us on top.</Typography>
          </Box>
        </Card>
</Box>


    </div>
  );
}

export default WhyChooseUs;
