import React from 'react';
import NavBar from '../Tools/NavBar';
import { AddCircleOutline, CallMade } from '@mui/icons-material';
import { Card, Box, Typography, Button, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import JETPACK from "../Assets/img/jetpack.png";
// import { Button } from 'bootstrap';

function Home() {
    const actions = [
        { icon: <AddCircleOutline />, name: 'Action 1', onClick: () => { /* Handle action */ } },
        { icon: <CallMade />, name: 'Action 2', onClick: () => { /* Handle action */ } },
    ]
  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', overflowY: 'auto' }}>
      <NavBar />
      <Box sx={{ boxShadow: '0 4px 8px rgba(255, 215, 0, 0.7)', height: "47rem", padding: '2rem' }}>
        <Box sx={{width: {xl: "60rem", lg: '30rem'}}}>
        <Typography sx={{
          fontSize: { xl: 70, lg: 60, md: 50}, // Responsive font sizes
          fontWeight: 'bold',
          textAlign: {xl: 'left', lg : 'left', md: 'center'}, // Responsive text alignment
          marginTop: {xl: '8rem', lg: '5rem', md: '-0.5rem'},
          marginLeft: {xl: '8rem', lg: '8rem'}, // Responsive margin
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          fontFamily: 'Roboto, sans-serif'
        }}>
          Innovate, Transform, Excel
        </Typography>
        </Box>
        <Box sx={{width: {xl: "50rem", lg: '40rem', md: '53rem'}}}>
        <Typography sx={{
          fontSize: { xl: 25, lg: 21, md: 21 }, // Responsive font sizes
          textAlign: {xl: 'left', lg: 'left', md: 'left'}, // Responsive text alignment
          marginTop: {xl: '-0.5rem', lg: '-0.5rem'},
          marginLeft: {xl: '8rem', lg: '8rem', md: '4rem'}, // Responsive margin
          color: 'white',
          fontFamily: 'Roboto, sans-serif'
        }}>
          Revolutionize your business with cutting-edge software, seamless digital transformation, expert consulting, and top-tier tech talent development. Discover the future with Gworldsoft.
        </Typography>
        </Box>
        <Box className= "JET PACK IMG" sx={{
          display: 'flex',
          justifyContent: { xl: 'right', lg: 'right', md: 'center'}, // Responsive justification
          marginTop: {xl: '-24rem', lg: '-24rem', md: '5rem'},
          marginRight: { xl: '20rem', lg: '9rem'}, // Responsive margin
        }}>
          <img src={JETPACK} alt="Jetpack" style={{ width: '80%', maxWidth: '30rem', height: 'auto' }} />
        </Box>
        <Box>
            <Button variant="contained" sx={{
                marginLeft: {xl: '8rem', lg: '8rem', md: '4rem'},
                marginTop: {xl: '-5rem', lg: '-5rem', md: '-65rem'},
                width: {xl: '12rem', lg: '12rem'},
                height: {xl: '4rem', lg: '4rem'},
                borderRadius: '2rem',
                backgroundColor: 'gold',
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'black'
            }}>GET STARTED</Button>
            <Button variant="outlined" sx={{
                marginLeft: {xl: '3rem', lg: '3rem', md: '1rem'},
                marginTop: {xl: '-5rem', lg: '-5rem',  md: '-65rem'},
                width: {xl: '14rem', lg: '14rem'},
                height: {xl: '4rem', lg: '4rem'},
                borderRadius: '2rem',
                // backgroundColor: 'gold',
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'gold'
            }}>HIRE OUR TALENT</Button>
        </Box>
        <SpeedDial
          ariaLabel="SpeedDial example"
          icon={<SpeedDialIcon />}
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.onClick}
              color={'gold'}
            />
          ))}
        </SpeedDial>
      </Box>
      <Box sx={{ 
        // color: 'gold',
        boxShadow: '0 4px 8px rgba(255, 215, 0, 0.7)', 
        height: "60rem", 
        // padding: '2rem'
        }}>
          <Card sx={{
            backgroundColor: 'gold',
            height: '60rem',
          }}>
            <Box sx={{
              display: 'flex',
              alignItem: 'center',
              justifyContent: 'center'
            }}>
              <Typography sx={{
                fontSize: 38,
                fontWeight: 'bold',
                marginTop: '16rem',
                textAlign: 'center'
              }}>
                Our service
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItem: 'center',
              justifyContent: 'center',
              width: {xl: '40%'},
              marginLeft: {xl: '36rem'}
            }}>
              <Typography sx={{
                fontSize: 20,
                // fontWeight: 'bold',
                marginTop: {xl: '3rem'},
                textAlign: 'center',
                // marginLeft: {xl: '20rem'}
              }}>
              Explore our comprehensive range of technology services designed to drive you or your business forward.
              </Typography>
            </Box>
            <Box sx={{ 
              marginTop: {xl: '8rem'},
              display: 'flex',
              alignItem: 'center',
              justifyContent: 'center',
            }}>
              <Button variant="contained" sx={{
                  marginLeft: {xl: '1rem', lg: '8rem', md: '4rem'},
                  marginTop: {xl: '-5rem', lg: '-5rem', md: '-65rem'},
                  width: {xl: '20rem', lg: '12rem'},
                  height: {xl: '4rem', lg: '4rem'},
                  borderRadius: '2rem',
                  backgroundColor: 'black',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  color: 'white'
              }}>Tech Talent Education</Button>
              <Button variant="contained" sx={{
                  marginLeft: {xl: '1rem', lg: '8rem', md: '4rem'},
                  marginTop: {xl: '-5rem', lg: '-5rem', md: '-65rem'},
                  width: {xl: '20rem', lg: '12rem'},
                  height: {xl: '4rem', lg: '4rem'},
                  borderRadius: '2rem',
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  color: 'black'
              }}>Software Solutions</Button>
              <Button variant="contained" sx={{
                  marginLeft: {xl: '1rem', lg: '8rem', md: '4rem'},
                  marginTop: {xl: '-5rem', lg: '-5rem', md: '-65rem'},
                  width: {xl: '20rem', lg: '12rem'},
                  height: {xl: '4rem', lg: '4rem'},
                  borderRadius: '2rem',
                  backgroundColor: 'black',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  color: 'gold'
              }}>Digital Transformation</Button>
              <Button variant="contained" sx={{
                  marginLeft: {xl: '1rem', lg: '8rem', md: '4rem'},
                  marginTop: {xl: '-5rem', lg: '-5rem', md: '-65rem'},
                  width: {xl: '20rem', lg: '12rem'},
                  height: {xl: '4rem', lg: '4rem'},
                  borderRadius: '2rem',
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  color: 'black'
              }}>Tech Consulting</Button>
              <Button variant="contained" sx={{
                  marginLeft: {xl: '1rem', lg: '8rem', md: '4rem'},
                  marginTop: {xl: '-5rem', lg: '-5rem', md: '-65rem'},
                  width: {xl: '20rem', lg: '12rem'},
                  height: {xl: '4rem', lg: '4rem'},
                  borderRadius: '2rem',
                  backgroundColor: 'black',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  color: 'white'
              }}>Hire our talent</Button>
          </Box> 
          <Box sx={{
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
            marginTop: '6rem'
          }}>
          <Button variant="outlined" sx={{
                  marginLeft: {xl: '1rem', lg: '8rem', md: '4rem'},
                  marginTop: {xl: '-5rem', lg: '-5rem', md: '-65rem'},
                  width: {xl: '13rem', lg: '12rem'},
                  height: {xl: '4rem', lg: '4rem'},
                  borderRadius: '2rem',
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  color: 'black'
              }}>Learn more</Button>
          </Box>
          </Card>
      </Box>
      <Box>
      <Box sx={{
            flexDirection: 'row',
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
            marginTop: '30rem',
            
          }}>
            <Typography sx={{
              textAlign: 'center',
              fontSize: 35,
              fontWeight: 'bold',
              width: {xl: '50%'}
            }}>
            Are you looking to start a career in technology or take your existing skills to the next level
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
            marginTop: '7rem',
          }}>
            <Button variant='contained' sx={{
              marginLeft: {xl: '1rem', lg: '8rem', md: '4rem'},
              marginTop: {xl: '-5rem', lg: '-5rem', md: '-65rem'},
              width: {xl: '20rem', lg: '12rem'},
              height: {xl: '3rem', lg: '4rem'},
              borderRadius: '2rem',
              backgroundColor: 'gold',
              fontWeight: 'bold',
              fontSize: '15px',
              color: 'black'
            }}>
            Explore our popular courses
            </Button>
          </Box>
      </Box>
    </div>
  );
}

export default Home;
