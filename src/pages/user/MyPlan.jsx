// MyPage.jsx

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Avatar,
  Grid,
  ListItemAvatar,
  Button,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useUserStore from "../../store/useUserStore";
import LINKS from "../../routes/Links";
import { fetchPlans, fetchPlanDetails } from "../../services/plan/myplans.js";

const MyPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const {
    data: plansData,
    isLoading: isPlansLoading,
    error: plansError,
  } = useQuery({
    queryKey: ["plans", user.userId],
    queryFn: () => fetchPlans(user.userId),
    enabled: !!user.userId,
  });

  const {
    data: planDetailsData,
    isLoading: isPlanDetailsLoading,
    error: planDetailsError,
  } = useQuery({
    queryKey: ["planDetails", selectedPlan?.id],
    queryFn: () => fetchPlanDetails(selectedPlan?.id),
    enabled: !!selectedPlan?.id,
  });

  useEffect(() => {
    if (!user.userId) {
      navigate(LINKS.LOGIN.path);
    }
  }, [user.userId, navigate]);

  useEffect(() => {
    if (planDetailsData) {
      console.log("Plan Details Data:", planDetailsData);
      console.log("Day Plans:", planDetailsData.dayPlans);
    }
  }, [planDetailsData]);

  const handleCardClick = (plan) => {
    setSelectedPlan(plan);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedPlan(null);
  };

  const renderPlanDetails = () => {
    if (!planDetailsData) return null;

    return (
      <Box>
        <Typography variant="h6">{planDetailsData.subject}</Typography>
        <Typography>
          {planDetailsData.startDay} - {planDetailsData.endDay}
        </Typography>
        <Typography>{planDetailsData.areaCodeName}</Typography>

        {planDetailsData.dayPlans && planDetailsData.dayPlans.length > 0 ? (
          planDetailsData.dayPlans.map((dayPlan, index) => (
            <Box key={index} mt={2}>
              <Typography variant="subtitle1">Day {dayPlan.day}</Typography>
              {dayPlan.places &&
                dayPlan.places.map((place, placeIndex) => (
                  <Box key={placeIndex} mt={1}>
                    <Typography>{place.title}</Typography>
                    <Typography variant="body2">
                      {place.placeSummary}
                    </Typography>
                    {place.placeImgUrls && (
                      <img
                        src={place.placeImgUrls}
                        alt={place.title}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    )}
                  </Box>
                ))}
            </Box>
          ))
        ) : (
          <Typography>No detailed plans available for this trip.</Typography>
        )}
      </Box>
    );
  };

  if (isPlansLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (plansError) {
    return (
      <Typography color="error">
        Error loading plans: {plansError.message}
      </Typography>
    );
  }

  const plans = Array.isArray(plansData) ? plansData : [];

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", color: "black", marginBottom: 2 }}
        >
          My Plan
        </Typography>
        {plans.length === 0 ? (
          <Typography>No plans available.</Typography>
        ) : (
          <List>
            {plans.map((plan) => (
              <Paper
                key={plan.id}
                elevation={3}
                sx={{
                  marginBottom: 3,
                  padding: 0,
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                  cursor: "pointer",
                }}
                onClick={() => handleCardClick(plan)}
              >
                <ListItem
                  sx={{ display: "flex", alignItems: "center", padding: 0 }}
                >
                  <ListItemAvatar sx={{ minWidth: 140 }}>
                    <Avatar
                      variant="square"
                      src={plan.thumbnail || plan.thumbnailUrl} // 'thumbnail' 또는 'thumbnailUrl' 사용
                      sx={{
                        width: 140,
                        height: 140,
                        marginLeft: 0,
                        borderRadius: "15px",
                      }}
                    />
                  </ListItemAvatar>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    sx={{ paddingLeft: 5 }}
                  >
                    <Typography
                      variant="body1"
                      component="div"
                      gutterBottom
                      sx={{ color: "primary.main", fontWeight: "bold" }}
                    >
                      {plan.subject}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ marginTop: 4 }}
                    >
                      {plan.areaCodeName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ marginTop: 1 }}
                    >
                      {`${plan.startDay} ~ ${plan.endDay}`}
                    </Typography>
                  </Grid>
                </ListItem>
              </Paper>
            ))}
          </List>
        )}
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            width: "600px",
            maxHeight: "80vh",
            height: "auto",
            borderRadius: "16px",
            padding: "2px",
            overflow: "hidden",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#1976d2",
          }}
        >
          Plan Details
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            overflowY: "auto",
            maxHeight: "70vh",
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {isPlanDetailsLoading ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress />
            </Box>
          ) : planDetailsError ? (
            <Typography color="error">
              Error loading plan details:{" "}
              {planDetailsError.message || JSON.stringify(planDetailsError)}
            </Typography>
          ) : (
            renderPlanDetails()
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button onClick={handleCloseDialog} sx={{ color: "#1976d2" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default MyPage;
