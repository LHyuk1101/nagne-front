import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DayTimeline from "../../components/CustomTemplate/DayTimeLine";
import RecommendationSummary from "../../components/CustomTemplate/RecommendationSummary";

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
}));

const FixedButtonContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1000,
  width: "calc(100% - 32px)",
  maxWidth: "568px",
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(0, 2),
  [theme.breakpoints.up("sm")]: {
    width: "calc(100% - 48px)",
  },
}));

const TravelPlan = {
  title: "Seoul hoooooooooooot place",
  description: "hooooooooooooooooooooooooooooooooooooot place",
  days: [
    {
      day: 1,
      activities: [
        {
          name: "경복궁",
          time: "09:00 AM - 11:30 AM",
          type: "80",
          description: "왕이 살았었음?",
          tags: ["History", "Architecture", "Culture"],
        },
        {
          name: "Gwangjang Market",
          time: "12:30 PM - 02:30 PM",
          type: "81",
          description:
            "Experience traditional Korean street food and local cuisine.",
          tags: ["Food", "Market", "Local Experience"],
        },
        {
          name: "Namsan Seoul Tower",
          time: "03:30 PM - 06:30 PM",
          type: "80",
          description: "Enjoy panoramic views of Seoul from the iconic tower.",
          tags: ["Views", "Landmark", "Photography"],
        },
        {
          name: "Souel Hotel",
          time: "07:00 PM - 10:00 AM ",
          type: "81",
          description: "호텔에 대한 간단한 설명",
          tags: ["Accommodation", "기타 특징"],
        },
      ],
    },
    {
      day: 2,
      activities: [
        {
          name: "Bukchon Hanok Village",
          time: "10:00 AM - 12:00 PM",
          type: "80",
          description:
            "Wander through a traditional Korean village in the heart of Seoul.",
          tags: ["Culture", "History", "Architecture"],
        },
        {
          name: "Insadong",
          time: "01:00 PM - 03:00 PM",
          type: "80",
          description: "Shop for traditional Korean crafts and artwork.",
          tags: ["Shopping", "Culture", "Art"],
        },
        {
          name: "Han River Cruise",
          time: "04:00 PM - 06:00 PM",
          type: "80",
          description: "Relax on a scenic cruise along the Han River.",
          tags: ["River", "Relaxation", "Scenery"],
        },
        {
          name: "Souel Hotel",
          time: "07:00 PM - 10:00 AM ",
          type: "81",
          description: "호텔에 대한 간단한 설명",
          tags: ["Accommodation", "기타 특징"],
        },
      ],
    },
  ],
};

const ModernCustomTemplate = () => {
  return (
    <Box component="main" sx={{ pb: 8 }}>
      <StyledCard>
        <CardMedia
          component="img"
          height="200"
          image={prettyImage}
          alt="룰루랄라"
        />
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            {TravelPlan.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {TravelPlan.description}
          </Typography>
        </CardContent>
      </StyledCard>

      {TravelPlan.days.map((day, index) => (
        <DayTimeline
          key={index}
          day={day}
          dayNumber={index + 1}
          isFirstDay={index === 0}
        />
      ))}
      <RecommendationSummary />
      <FixedButtonContainer>
        <StyledButton variant="contained" color="primary" size="large">
          Create Plan
        </StyledButton>
      </FixedButtonContainer>
    </Box>
  );
};

export default ModernCustomTemplate;
