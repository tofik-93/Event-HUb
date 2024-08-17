import { Box, Typography, Button } from '@mui/material';
import ethRunImage from '../assets/ethrun.jpeg';
import dayPartyImage from '../assets/dayparty.jpeg';
import progr from '../assets/programcon.jpeg';
import exhi from '../assets/exhi.jpg';

const eventData = [
  {
    src: dayPartyImage,
    alt: "Day Party",
    title: "Day Party",
    description: "This is a description of the day party event.",
    date: "Mar 23, 2002"
  },
  {
    src: ethRunImage,
    alt: "Great Ethiopian Run",
    title: "Great Ethiopian Run",
    description: "This is a description of the Great Ethiopian Run event.",
    date: "Mar 24, 2024"
  },
  {
    src: progr,
    alt: "Programming Contest",
    title: "Programming Contest",
    description: "This is a description of the Programming Contest event.",
    date: "Mar 25, 2024"
  },
  {
    src: exhi,
    alt: "Art Exhibition",
    title: "Art Exhibition",
    description: "This is a description of the Art Exhibition event.",
    date: "Mar 26, 2024"
  },
  {
    src: dayPartyImage,
    alt: "Day Party",
    title: "Day Party",
    description: "This is a description of the day party event.",
    date: "Mar 23, 2002"
  },
];

const FeaturedEvents = () => (
  <Box sx={{ marginTop: 8 }}>
    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
      Featured Events
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        overflowX: 'auto',
        overflowY: 'hidden',
        padding: 0,
        scrollbarWidth: 'none', // For Firefox
        msOverflowStyle: 'none', // For Internet Explorer and Edge
        '&::-webkit-scrollbar': {
          display: 'none', // For Chrome, Safari, and Opera
        },
      }}
    >
      {eventData.map((event, index) => (
        <Box
          key={index}
          sx={{
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: 2,
            padding: 2, // Increase padding for more space
            width: { xs: '100%', md: 'calc(50% - 16px)' },
            maxWidth: '350px', // Increased maxWidth
            boxSizing: 'border-box',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Shadow only at the bottom
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: 250, // Increased height for the image container
              overflow: 'hidden',
              borderRadius: '8px 8px 0 0',
              position: 'relative',
            }}
          >
            <img
              src={event.src}
              alt={event.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </Box>
          <Box
            sx={{
              padding: 2,
              width: '100%',
              boxSizing: 'border-box',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
              {event.title}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              {event.description}
            </Typography>
            <Typography variant="caption" sx={{ marginTop: 1, color: 'text.secondary' }}>
              {event.date}
            </Typography>
            <Button
              variant="text"
              sx={{ textTransform: 'none', marginTop: 2, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            >
              Details &gt;
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

export default FeaturedEvents;
