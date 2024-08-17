import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Facebook as FacebookIcon, LinkedIn as LinkedInIcon, Instagram as InstagramIcon, Twitter as TwitterIcon } from '@mui/icons-material';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: 'var(--color-primary)', // Replace with your theme color
      padding: '3rem 0',
      textAlign: 'center',
      fontSize: '0.9rem',
      marginTop: '3rem', // Adjust if necessary
    }}
  >
    <Typography variant="h5" component="a" href="#" sx={{ 
      fontSize: '2rem', 
      fontWeight: 500, 
      marginBottom: '2rem', 
      display: 'inline-block',
      color: '#030303',
      textDecoration: 'none', // Ensure links have no underline
    }}>
      Tofik Mifta
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '4rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          padding: 0,
          listStyle: 'none',
        }}
      >
        <Typography component="li">
          <a href="#">Home</a>
        </Typography>
        <Typography component="li">
          <a href="#about">About</a>
        </Typography>
        <Typography component="li">
          <a href="#experience">Experience</a>
        </Typography>
        <Typography component="li">
          <a href="#services">Services</a>
        </Typography>
        <Typography component="li">
          <a href="#portfolio">Portfolio</a>
        </Typography>
        <Typography component="li">
          <a href="#testimonial">Testimonial</a>
        </Typography>
        <Typography component="li">
          <a href="#contact">Contact</a>
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '4rem',
        }}
      >
        <a href="https://facebook.com" aria-label="Facebook">
          <FacebookIcon sx={{ color: 'var(--color-white)', backgroundColor: 'var(--color-bg)', padding: '0.8rem', borderRadius: '0.7rem', '&:hover': { backgroundColor: 'transparent', color: 'var(--color-bg)', borderColor: 'var(--color-bg)' } }} />
        </a>
        <a href="https://www.instagram.com/tof.k_m.f/" aria-label="Instagram">
          <InstagramIcon sx={{ color: 'var(--color-white)', backgroundColor: 'var(--color-bg)', padding: '0.8rem', borderRadius: '0.7rem', '&:hover': { backgroundColor: 'transparent', color: 'var(--color-bg)', borderColor: 'var(--color-bg)' } }} />
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <TwitterIcon sx={{ color: 'var(--color-white)', backgroundColor: 'var(--color-bg)', padding: '0.8rem', borderRadius: '0.7rem', '&:hover': { backgroundColor: 'transparent', color: 'var(--color-bg)', borderColor: 'var(--color-bg)' } }} />
        </a>
        <a href="https://www.linkedin.com/in/tofik-mifta-8856452b1/" aria-label="LinkedIn">
          <LinkedInIcon sx={{ color: 'var(--color-white)', backgroundColor: 'var(--color-bg)', padding: '0.8rem', borderRadius: '0.7rem', '&:hover': { backgroundColor: 'transparent', color: 'var(--color-bg)', borderColor: 'var(--color-bg)' } }} />
        </a>
      </Box>
    </Box>
    <Typography variant="body2" sx={{ color: 'var(--color-bg)', marginBottom: '4rem' }}>
      &copy; Tofik Mifta website. All rights reserved
    </Typography>
  </Box>
);

export default Footer;
