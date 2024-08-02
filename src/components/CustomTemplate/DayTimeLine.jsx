import React, { useState } from 'react';
import { Typography, Box, Collapse, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ActivityCard from './ActivityCard';

const TimelineBar = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isFirstDay'
})(({ theme, isFirstDay }) => ({
  position: 'absolute',
  top: 0,
  bottom: '-30px', // 이 값을 -50px에서 -30px로 변경
  left: 'calc(50% - 2px)',
  width: '4px',
  background: theme.palette.primary.main,
  zIndex: -1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: isFirstDay ? '-24px' : 'auto',
    left: 0,
    width: '100%',
    height: isFirstDay ? '24px' : 0,
    background: 'transparent',
  },
}));

const DayTitle = styled(Typography)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textAlign: 'center',
  width: '120px',
  padding: '10px',
  borderRadius: '20px',
  margin: '0 auto 16px', // 하단 마진을 20px에서 16px로 줄임
  fontWeight: 'bold',
  position: 'relative',
  zIndex: 1,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const DayContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isFirstDay'
})(({ theme, isFirstDay }) => ({
  position: 'relative',
  marginBottom: theme.spacing(3), // 6에서 3으로 변경하여 간격을 줄임
  paddingTop: isFirstDay ? 0 : theme.spacing(2), // 3에서 2로 변경
  '&:last-child': {
    marginBottom: 0,
    '& .MuiBox-root:first-of-type': {
      bottom: 0,
    },
  },
}));

const StyledCollapse = styled(Collapse)(({ theme }) => ({
  transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
}));

const DayTimeline = ({ day, dayNumber, isFirstDay }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <DayContainer isFirstDay={isFirstDay}>
      <TimelineBar isFirstDay={isFirstDay} />
      <DayTitle onClick={toggleExpand}>
        Day {dayNumber}
        <IconButton size="small" sx={{ ml: 1, color: 'inherit' }}>
          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </DayTitle>
      <StyledCollapse in={isExpanded}>
        <Box sx={{ mt: 2 }}>
          {day.activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </Box>
      </StyledCollapse>
    </DayContainer>
  );
};

export default DayTimeline;