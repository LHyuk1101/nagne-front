import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
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
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { createPlan } from "../../services/plan/plan.js";
import LoadingDialog from "../../components/UI/LoadingBar";
import usePlanStore from "../../store/PlanContext.js";
import useUserStore from "../../store/useUserStore.js";
import LINKS from "../../routes/Links.jsx";
import { useDebounceClick } from "../../hooks/useDebounce";

const PlanComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [planData, setPlanData] = useState(null);
  const { setSelectedPlacesData } = usePlanStore();
  const [expanded, setExpanded] = useState({});
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const { user } = useUserStore();

  const createPlanMutation = useMutation({
    mutationFn: createPlan,
    onSuccess: (data) => {
      console.log("API response:", data);
      if (data && data.dayPlans && Array.isArray(data.dayPlans)) {
        setPlanData(data);
        setSelectedPlacesData(data.places || []);
        const newExpanded = {};
        data.dayPlans.forEach((day) => {
          newExpanded[`day${day.day}`] = isAllExpanded;
        });
        setExpanded(newExpanded);
      } else {
        console.error("Unexpected API response structure:", data);
        alert("Received unexpected data format from the server.");
      }
    },
    onError: (error) => {
      console.error("API call failed:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
      }
      alert("Failed to make plan. Please check the console for more details.");
    },
  });

  useEffect(() => {
    if (!user.userId) {
      alert("You need to login to view your plan!");
      navigate(LINKS.LOGIN.path, { state: { returnTo: location.pathname } });
      return;
    }

    const storedPlan = sessionStorage.getItem("currentPlan");
    if (storedPlan) {
      setPlanData(JSON.parse(storedPlan));
    } else if (location.state && location.state.planData) {
      const planDataWithUserId = {
        ...location.state.planData,
        userId: user.userId,
      };
      console.log("Calling createPlanMutation with:", planDataWithUserId);
      createPlanMutation.mutate(planDataWithUserId);
    } else {
      navigate(LINKS.PATH_FIRST.path);
    }
  }, [location.state, user.userId, navigate]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded((prev) => ({ ...prev, [panel]: isExpanded }));
  };

  const debouncedCreatePlan = useDebounceClick(() => {
    if (location.state && location.state.planData) {
      const planDataWithUserId = {
        ...location.state.planData,
        userId: user.userId,
      };
      createPlanMutation.mutate(planDataWithUserId);
    }
  }, 500);

  const handleToggleAll = () => {
    const newExpandedState = !isAllExpanded;
    setIsAllExpanded(newExpandedState);
    if (planData && planData.dayPlans) {
      const newExpanded = {};
      planData.dayPlans.forEach((day) => {
        newExpanded[`day${day.day}`] = newExpandedState;
      });
      setExpanded(newExpanded);
    }
  };

  const handleSavePlan = () => {
    if (!user.userId) {
      alert("Please log in to view your plan!");
      navigate(LINKS.LOGIN.path, { state: { returnTo: LINKS.MYPLAN.path } });
      return;
    }
    navigate(LINKS.MYPLAN.path);
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

  if (createPlanMutation.isPending) {
    return (
      <LoadingDialog
        open={true}
        message="We are creating your perfect travel plan..."
      />
    );
  }

  if (!planData || !planData.dayPlans) {
    return <Typography>Loading plan data...</Typography>;
  }

  return (
    <Box
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
        {planData.subject || "Your Travel Plan"}
      </Typography>

      {planData.reasoning && (
        <Typography variant="body1" sx={{ mb: 2, fontStyle: "italic" }}>
          {planData.reasoning}
        </Typography>
      )}

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
                "& .MuiSwitch-switchBase": { color: "#ff5722" },
                "& .MuiSwitch-switchBase.Mui-checked": { color: "#4caf50" },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#4caf50",
                },
                "& .MuiSwitch-track": { backgroundColor: "#ffccbc" },
              }}
            />
          }
          label="Expand all"
          sx={{ color: "#000" }}
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
                        src={place.placeImgUrls || "default_image_url"}
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
                          {place.title}
                        </Typography>
                      }
                      secondary={
                        <Box sx={{ mt: 1 }}>
                          <Typography
                            variant="body2"
                            color="text.primary"
                            sx={{ mb: 1 }}
                          >
                            {place.placeSummary}
                          </Typography>
                          {(place.subject || place.reasoning) && (
                            <Box
                              sx={{
                                mt: 1,
                                pl: 2,
                                borderLeft: "2px solid #e0e0e0",
                              }}
                            >
                              {place.subject && (
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  sx={{ mb: 0.5 }}
                                >
                                  <strong>Subject:</strong> {place.subject}
                                </Typography>
                              )}
                              {place.reasoning && (
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {place.reasoning}
                                </Typography>
                              )}
                            </Box>
                          )}
                        </Box>
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
                        {`${dayPlan.places[placeIndex + 1].moveTime || "Unknown"} minutes`}
                      </Typography>
                    </Box>
                  )}
                  {placeIndex < dayPlan.places.length - 1 && (
                    <Divider variant="inset" component="li" />
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
