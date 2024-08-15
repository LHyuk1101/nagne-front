import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchPlans, fetchPlanDetails } from "../../services/plan/myplans";
import useUserStore from "../../store/useUserStore";

const MyPage = () => {
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
    refetchOnMount: true,
    refetchOnWindowFocus: true,
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

  const handleCardClick = (plan) => {
    setSelectedPlan(plan);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedPlan(null);
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
    console.error("Plans fetch error:", plansError);
    return (
      <Typography color="error">
        Error: {plansError.message || JSON.stringify(plansError)}
      </Typography>
    );
  }

  if (!plansData || plansData.length === 0) {
    return <Typography>No plans available.</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ my: 4 }}
      >
        My Plans
      </Typography>
      <Grid container spacing={3}>
        {plansData.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
              onClick={() => handleCardClick(plan)}
            >
              <CardMedia
                component="img"
                height="140"
                image={plan.thumbnail}
                alt={plan.subject}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {plan.subject}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`${plan.startDay} ~ ${plan.endDay}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {plan.areaCodeName}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{selectedPlan?.subject}</DialogTitle>
        <DialogContent dividers>
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
            <>
              <Typography variant="body1" paragraph>
                Start Date: {planDetailsData?.startDay}
              </Typography>
              <Typography variant="body1" paragraph>
                End Date: {planDetailsData?.endDay}
              </Typography>
              <Typography variant="body1" paragraph>
                Status: {planDetailsData?.status}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Daily Plans:
              </Typography>
              {planDetailsData?.dayPlans?.map((dayPlan, index) => (
                <Box key={index} mb={2}>
                  <Typography variant="subtitle1">Day {dayPlan.day}</Typography>
                  {dayPlan.places.map((place, placeIndex) => (
                    <Card key={placeIndex} sx={{ mb: 1 }}>
                      <CardContent>
                        <Typography variant="subtitle2">
                          {place.title}
                        </Typography>
                        <Typography variant="body2">
                          {place.placeSummary}
                        </Typography>
                        <Typography variant="body2">
                          {place.reasoning}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              ))}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default MyPage;
