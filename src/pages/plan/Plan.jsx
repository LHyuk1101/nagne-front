import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GoogleMap from "../../components/map/GoogleMap.jsx";
import PlanHeader from "./PlanHeader.jsx";

const Plan = () => {
  const navigate = useNavigate();
  const travelData = {
    area: "SEOUL",
    startDate: new Date("2024-08-02"),
    endDate: new Date("2024-08-11"),
    center: { lat: 37.5665, lng: 126.978 },
    itinerary: [
      {
        day: 1,
        date: new Date("2024-08-02"),
        places: [
          {
            time: "20:50-22:00",
            type: "Location",
            name: "성산 일출봉",
            image:
              "https://cdn.pixabay.com/photo/2019/10/30/07/43/jeju-4588910_960_720.jpg",
          },
          {
            time: "23:35-23:35",
            type: "Accommodation",
            name: "스위트호텔 제주",
            image:
              "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg",
          },
        ],
        travel: { duration: "95분" },
      },
      {
        day: 2,
        date: new Date("2024-08-03"),
        places: [
          {
            time: "12:39-12:39",
            type: "Accommodation",
            name: "스위트호텔 제주",
            image:
              "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg",
          },
        ],
        travel: { duration: "76분" },
      },
      {
        day: 3,
        date: new Date("2024-08-04"),
        places: [
          {
            time: "20:50-22:00",
            type: "Location",
            name: "성산 일출봉",
            image:
              "https://cdn.pixabay.com/photo/2019/10/30/07/43/jeju-4588910_960_720.jpg",
          },
          {
            time: "23:35-23:35",
            type: "Accommodation",
            name: "스위트호텔 제주",
            image:
              "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg",
          },
        ],
        travel: { duration: "95분" },
      },
    ],
  };

  const { area, startDate, endDate, center, itinerary } = travelData;

  const formatDate = (date) => {
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
    });
  };

  const handlePrevious = () => {
    navigate("/create");
  };

  const handleNext = () => {
    navigate("/mypage");
  };

  const handleAddAPlace = () => {
    navigate("/plan/:location");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <PlanHeader />

      <Box sx={{ width: "100%", height: "150px", overflow: "hidden" }}>
        <GoogleMap center={center} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
        <Button variant="contained" onClick={handleAddAPlace} size="small">
          Add a Place
        </Button>
      </Box>

      {itinerary.map((day, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{`Day ${day.day} - ${formatDate(day.date)}`}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {day.places.map((place, placeIndex) => (
                <React.Fragment key={placeIndex}>
                  <ListItem>
                    <Avatar src={place.image} alt={place.name} />
                    <ListItemText
                      primary={place.name}
                      secondary={`${place.time} - ${place.type}`}
                    />
                  </ListItem>
                  {placeIndex < day.places.length - 1 && (
                    <ListItem>
                      <DirectionsCarIcon />
                      <ListItemText
                        primary={`Travel time: ${day.travel.duration}`}
                      />
                    </ListItem>
                  )}
                  {placeIndex < day.places.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}

      <Box
        sx={{ mt: "auto", display: "flex", justifyContent: "space-between" }}
      >
        <Button variant="contained" onClick={handlePrevious}>
          Previous
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default Plan;
