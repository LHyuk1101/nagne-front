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
  Card,
  CardMedia,
  CardContent,
  Divider,
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
      <Box sx={{ py: 2 }}>
        <Paper
          elevation={2}
          sx={{
            padding: 2,
            borderRadius: "12px",
            backgroundColor: "#f0f4f8",
            marginBottom: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: 1, color: "#333" }}
          >
            {planDetailsData.subject}
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Location:</strong> {planDetailsData.areaCodeName}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Start Date:</strong> {planDetailsData.startDay}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>End Date:</strong> {planDetailsData.endDay}
          </Typography>
        </Paper>

        <Box sx={{ mt: 4 }}>
          {planDetailsData.dayPlans && planDetailsData.dayPlans.length > 0 && (
            <>
              {planDetailsData.dayPlans.map((dayPlan, index) => (
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
                          {place.placeSummary}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              ))}
            </>
          )}
        </Box>
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
          sx={{ fontWeight: "bold", color: "#333", marginBottom: 2 }}
        >
          My Plan
        </Typography>
        {plans.length === 0 ? (
          <Typography>No plans available.</Typography>
        ) : (
          <List>
            {plans
              .slice() // 원본 배열을 변형하지 않기 위해 slice() 사용
              .reverse() // 배열의 순서를 역순으로 변경
              .map((plan) => (
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
                        src={plan.thumbnail || plan.thumbnailUrl} // 'thumbnail' 또는 'thumbnailUrl' 사용
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
        )}
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            width: "600px", // 원하는 너비로 설정
            height: "auto", // 자동 높이
            maxHeight: "80vh", // 높이를 화면의 80%로 설정
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
            maxHeight: "60vh", // 필요한 최대 높이로 설정
            overflowY: "scroll", // 스크롤 허용
            "::-webkit-scrollbar": {
              display: "none", // 스크롤바 숨기기
            },
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
