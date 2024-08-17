import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import ManIcon from '@mui/icons-material/Man';
import eventImage from '../assets/event.jpeg';
import ExploreIcon from '@mui/icons-material/Explore';
import CompassCalibration from '@mui/icons-material/CompassCalibration';
import FeaturedEvents from './featureevent';
import Footer from './fotter/footer';
const HomePage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
        padding: 4,
      }}
    >
      {/* Header */}
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', textAlign: "center", marginBottom: 2 }}>
        Create Memorable Local Events
      </Typography>
      <Typography variant="body2" component="h2" sx={{ textAlign: "center", marginBottom: 4,fontSize: '0.75rem' }}>
        Welcome to the Event Management Dashboard. Easily Create and Organize Your Events
      </Typography>

      {/* Call to Action Box */}
      <Box 
        sx={{
          backgroundColor: 'white',
          padding: 2,
          borderRadius: 1,
          boxShadow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          marginBottom: 10,
          minHeight: '90px',  
        }}
      >
        <Typography 
          variant="body2" 
          component="div" 
          sx={{ 
            
            textAlign: 'left',
            fontSize: '0.75rem'
          }}
        >
          Jump into Organizing Exciting Local Events
        </Typography>
        <Button 
          sx={{
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkgray'
            }
          }}
        >
          Post your organized event
        </Button>
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 4,
          marginBottom: 5,
        }}
      >
        {/* Left section with text and buttons */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2" component="h2" sx={{ fontWeight: 'bold', marginBottom: 1,fontSize: '0.75rem' }}>
            Inspire
          </Typography>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2, whiteSpace: 'pre-line' }}>
            Creating Memorable{"\n"}Events for the Community
          </Typography>
          <Typography variant="body2" component="h2" sx={{ marginBottom: 10 , whiteSpace: 'pre-line' }}>
            Events bring people together, foster connections, and create lasting {"\n"}memories. 
            They play a vital role in building a vibrant community.
          </Typography>

          {/* Icons Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              
              gap: 4,
              marginBottom: 4,
            }}
          >
            
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CompassCalibration sx={{ fontSize: 40, color: 'text.primary' }} />
                <ManIcon sx={{ fontSize: 40, color: 'text.primary' }} />
              </Box>
              <Typography variant="body2" component="h2" sx={{ fontWeight: 'bold', marginTop: 1, marginBottom: 1,fontSize: '0.75rem' }}>
            Engage
          </Typography>
             
              <Typography variant="body2" sx={{ marginTop: 1,textAlgin:'left' , whiteSpace: 'pre-line' }}>
                Connect with like-minded individuals{"\n"}and expand your network through{"\n"}exciting events
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ExploreIcon sx={{ fontSize: 40, color: 'text.primary' }} />
              </Box>
              <Typography variant="body2" component="h2" sx={{ fontWeight: 'bold', marginTop: 1, marginBottom: 1,fontSize: '0.75rem' }}>
            Discover
          </Typography>

              <Typography variant="body2" sx={{ marginTop: 1, whiteSpace: 'pre-line' }}>
                Explore new interests, hobbies, and{"\n"}passions by attending a diverse{"\n"}range of events
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex-start', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Box sx={{ marginTop: 2, display: 'flex', gap: 2 }}>
                <Button variant="outlined" sx={{ textTransform: 'none' }}>
                  Learn More
                </Button>
                <Button variant="contained" sx={{ textTransform: 'none' }}>
                  Sign Up &gt;
                </Button>
              </Box>
            </Box>
        </Box>
        
        {/* Right section with image */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img src={eventImage} alt="Event" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </Box>
      </Box>

      {/* Featured Events Section */}
      <FeaturedEvents/>
      <Footer/>
     
    </Container>
  );
};

export default HomePage;
