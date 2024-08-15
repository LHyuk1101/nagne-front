import React, { useState } from "react";
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
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPlans, fetchPlanDetails } from "../../services/plan/myplans";
import useUserStore from "../../store/useUserStore";

const MyPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  const {
    data: plansData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["plans", user.userId],
    queryFn: () => fetchPlans(user.userId),
    enabled: !!user.userId,
    onError: (error) => {
      console.error("Error fetching plans:", error);
    },
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planDetails, setPlanDetails] = useState(null);

  const handleCardClick = async (plan) => {
    setSelectedPlan(plan);
    setOpenDialog(true);

    try {
      const details = await fetchPlanDetails(plan.id);
      setPlanDetails(details);
    } catch (error) {
      console.error("Error fetching plan details:", error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setPlanDetails(null);
  };

  if (isLoading) {
    return (
      <Container maxWidth="md">
        <Typography variant="h6" align="center" gutterBottom>
          Loading...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Typography variant="h6" align="center" gutterBottom>
          Error loading plans: {error.message}
        </Typography>
      </Container>
    );
  }

  // Ensure plansData is an array
  const plans = Array.isArray(plansData) ? plansData : [];

  if (plans.length === 0) {
    return (
      <Container maxWidth="md">
        <Typography variant="h6" align="center" gutterBottom>
          No plans available.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333", marginBottom: 2 }}
        >
          My Plans
        </Typography>
        <List>
          {plans.map((plan) => (
            <Paper
              key={plan.id}
              elevation={4}
              sx={{
                marginBottom: 3,
                padding: 0,
                borderRadius: "16px",
                backgroundColor: "#ffffff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
                cursor: "pointer",
              }}
              onClick={() => handleCardClick(plan)}
            >
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 0,
                }}
              >
                <ListItemAvatar sx={{ minWidth: 140 }}>
                  <Avatar
                    variant="square"
                    src={plan.thumbnail}
                    sx={{
                      width: 140,
                      height: 140,
                      borderRadius: "12px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </ListItemAvatar>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  sx={{ paddingLeft: 3 }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{ color: "#333", fontWeight: "bold" }}
                  >
                    {plan.subject}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#777", marginTop: 1 }}
                  >
                    {plan.areaCodeName}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#777", marginTop: 1 }}
                  >
                    {`${plan.startDay} ~ ${plan.endDay}`}
                  </Typography>
                </Grid>
              </ListItem>
            </Paper>
          ))}
        </List>
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            width: "600px",
            height: "auto",
            maxHeight: "80vh",
            borderRadius: "16px",
            padding: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: "#1976d2",
            padding: "16px",
          }}
        >
          Plan Details
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            padding: "16px",
            maxHeight: "60vh",
            overflowY: "scroll",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {planDetails && (
            <Box sx={{ py: 2 }}>
              {planDetails.dayPlans.map((dayPlan, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: 1,
                      color: "#1976d2",
                    }}
                  >
                    Day {dayPlan.day}
                  </Typography>
                  {dayPlan.places.map((place, idx) => (
                    <Card
                      key={idx}
                      sx={{
                        display: "flex",
                        marginBottom: 2,
                        borderRadius: "12px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        overflow: "hidden",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                        },
                        height: "120px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: 120,
                          height: "100%",
                          objectFit: "cover",
                        }}
                        image={place.placeImgUrls}
                        alt={place.title}
                      />
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          padding: "8px 16px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            fontSize: "1rem",
                            color: "#333",
                          }}
                        >
                          {place.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ marginTop: 1, color: "#777" }}
                        >
                          이동 시간: {place.moveTime}분
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              ))}
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", padding: "16px" }}>
          <Button onClick={handleCloseDialog} sx={{ color: "#1976d2" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default MyPage;
