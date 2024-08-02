import React, { useState } from 'react';
import { Paper, Typography, Box, Chip, Collapse, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import PlaceIcon from '@mui/icons-material/Place';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';

const StyledActivityCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: theme.shadows[5],
  },
}));

const ActivityContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const ActivityInfo = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  marginLeft: theme.spacing(2),
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: '56.25%', // 16:9 aspect ratio
  borderRadius: theme.shape.borderRadius,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const getIconForActivityType = (type) => {
  switch (type) {
    case '80': return <PlaceIcon />;
    case '81': return <RestaurantIcon />;
    case '82': return <HotelIcon />;
    default: return <PlaceIcon />;
  }
};

const ActivityCard = ({ activity }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
      <StyledActivityCard elevation={3} onClick={toggleExpanded}>
        <ActivityContent>
          {getIconForActivityType(activity.type)}
          <ActivityInfo>
            <Typography variant="h6">{activity.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {activity.time}
            </Typography>
          </ActivityInfo>
        </ActivityContent>
        <StyledCardMedia
          image={activity.image}
          title={activity.name}
        />
        <Collapse in={expanded}>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">{activity.description}</Typography>
            <Box sx={{ mt: 1 }}>
              {activity.tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" sx={{ mr: 0.5, mt: 0.5 }} />
              ))}
            </Box>
          </Box>
        </Collapse>
      </StyledActivityCard>
    );
  };

  export default ActivityCard;