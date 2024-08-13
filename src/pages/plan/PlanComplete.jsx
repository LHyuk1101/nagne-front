import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { mockPlanData } from "./mockData";

const PlanComplete = () => {
  const location = useLocation();
  const [planData, setPlanData] = useState(null);
  const [expanded, setExpanded] = useState({});
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const storedPlanData = localStorage.getItem("planData");
    if (location.state && location.state.planData) {
      setPlanData(location.state.planData);
      localStorage.setItem("planData", JSON.stringify(location.state.planData));
    } else if (storedPlanData) {
      setPlanData(JSON.parse(storedPlanData));
    }
  }, [location.state]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded((prev) => ({ ...prev, [panel]: isExpanded }));
  };

  const handleToggleAll = () => {
    const newExpandedState = !isAllExpanded;
    setIsAllExpanded(newExpandedState);
    const newExpanded = {};
    planData.dayPlans.forEach((day) => {
      newExpanded["day${day.day}"] = newExpandedState;
    });
    setExpanded(newExpanded);
  };

  const handleSavePlan = () => {
    console.log("Save plan");
  };

  const getIconByContentType = (contentTypeId) => {
    switch (contentTypeId) {
      case "80":
        return <HotelIcon />;
      case "82":
        return <RestaurantIcon />;
      case "76":
        return <LocationOnIcon />;
      default:
        return <LocationOnIcon />;
    }
  };

  if (!planData) {
    return <Typography>Loading plan data...</Typography>;
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        maxWidth: 600,
        margin: "auto",
        p: 2,
        pb: 10,
        height: "calc(100vh - 56px)",
        overflowY: "auto",
        "&::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{ mb: 3, fontWeight: "bold" }}
      >
        {planData.subject}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <FormControlLabel
          control={
            <Switch
              checked={isAllExpanded}
              onChange={handleToggleAll}
              sx={{
                "& .MuiSwitch-switchBase": {
                  color: "#ff5722",
                },
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#4caf50",
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#4caf50",
                },
                "& .MuiSwitch-track": {
                  backgroundColor: "#ffccbc",
                },
              }}
            />
          }
          label="Check all"
          sx={{
            color: "#000",
          }}
        />
      </Box>

      {planData.dayPlans.map((dayPlan) => (
        <Accordion
          key={dayPlan.day}
          expanded={expanded[`day${dayPlan.day}`] || false}
          onChange={handleChange(`day${dayPlan.day}`)}
          sx={{
            mb: 2,
            boxShadow: 3,
            borderRadius: 2,
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: "#98D8C8",
              color: "primary.contrastText",
              borderRadius: expanded[`day${dayPlan.day}`] ? "16px 16px 0 0" : 2,
            }}
          >
            <Typography sx={{ fontWeight: "medium" }}>
              Day {dayPlan.day}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <List>
              {dayPlan.places.map((place, placeIndex) => (
                <React.Fragment key={place.placeId}>
                  <ListItem alignItems="flex-start" sx={{ py: 2 }}>
                    <ListItemAvatar>
                      <Avatar
                        src={place.placeImg}
                        alt={place.title}
                        sx={{ width: 56, height: 56 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "medium" }}
                        >
                          {plan.title}
                        </Typography>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography
                            variant="body2"
                            color="text.primary"
                            sx={{ mb: 1 }}
                          >
                            {template.placeSummary}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {template.reasoning}
                          </Typography>
                        </React.Fragment>
                      }
                      sx={{ ml: 2 }}
                    />
                    <Avatar sx={{ bgcolor: "secondary.light", ml: 1 }}>
                      {getIconByContentType(place.contentType)}
                    </Avatar>
                  </ListItem>
                  {placeIndex < dayPlan.places.length - 1 && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ml: 9,
                        my: 1,
                      }}
                    >
                      <Box
                        sx={{
                          flexGrow: 1,
                          borderLeft: "2px dashed",
                          borderColor: "grey.300",
                          height: "60px",
                          position: "relative",
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            left: "-12px",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        >
                          <Avatar
                            sx={{
                              bgcolor: "background.paper",
                              width: 24,
                              height: 24,
                            }}
                          >
                            <DirectionsCarIcon
                              color="action"
                              sx={{ fontSize: 16 }}
                            />
                          </Avatar>
                        </Box>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 2, position: "absolute", left: "70px" }}
                      >
                        {`${dayPlan.places[placeIndex + 1].moveTime} minutes`}
                      </Typography>
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 600,
          p: 2,
          boxSizing: "border-box",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleSavePlan}
          fullWidth
          sx={{
            height: "48px",
            fontSize: "1.1rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          Save Plan
        </Button>
      </Box>
    </Box>
  );
};

export default PlanComplete;
