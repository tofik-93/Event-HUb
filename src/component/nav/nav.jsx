import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import avater from '../../assets/avater.jpeg'; // Corrected path and filename

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }} elevation={0}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" color="textPrimary" sx={{display:'flex-start', fontWeight: 'bold' }}>
            eventsHub
          </Typography>

          {/* Navigation Links */}
          <Stack direction="row" spacing={3} sx={{ flexGrow: 1, justifyContent: 'center' }}>
            <Button sx={{ color: 'black' }}>Home</Button>
            <Button sx={{ color: 'black' }}>Discover Events</Button>
            <Button sx={{ color: 'black' }}>Upcoming Events</Button>
            <Button sx={{ color: 'black' }}>Featured Events</Button>
            <Button sx={{ color: 'black' }}>More</Button>
          </Stack>

          {/* Avatar and Name on the Right */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar alt="User Name" src={avater} /> {/* Use the correct import */}
            <Typography variant="body1" color="textPrimary">
              John Doe
            </Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
