import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Divider,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Mindful Meditation",
      location: "Seoul",
      startDate: "8/1",
      endDate: "8/7",
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
    },
    {
      id: 2,
      name: "Deep Calm",
      location: "Jeju",
      startDate: "8/8",
      endDate: "8/14",
      itinerary: [],
    },
    {
      id: 3,
      name: "Deep Calm",
      location: "Jeju",
      startDate: "8/8",
      endDate: "8/14",
      itinerary: [],
    },
    {
      id: 4,
      name: "Deep Calm",
      location: "Jeju",
      startDate: "8/8",
      endDate: "8/14",
      itinerary: [],
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [expandedPlan, setExpandedPlan] = useState(null);
  const [visibleImagesCount, setVisibleImagesCount] = useState({});

  const handleDetailClick = (plan) => {
    setSelectedPlan(plan);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleEditClick = (plan) => {
    console.log("Edit clicked for plan:", plan);
    navigate("/create");
  };

  const handleExpandClick = (planId) => {
    setVisibleImagesCount((prev) => {
      const currentCount = prev[planId] || 4;
      const totalImages = plans
        .find((plan) => plan.id === planId)
        ?.itinerary.flatMap((day) => day.places).length;
      const newCount =
        currentCount + 2 >= totalImages ? totalImages : currentCount + 2;
      return { ...prev, [planId]: newCount };
    });
  };

  const handleCollapseClick = (planId) => {
    setVisibleImagesCount((prev) => ({ ...prev, [planId]: 4 }));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          My Plans
        </Typography>
        <List>
          {plans.map((plan, index) => (
            <Paper
              key={plan.id}
              elevation={3}
              sx={{
                marginBottom: 3,
                padding: 2,
                borderRadius: "16px",
                backgroundColor: "#ffffff", // 배경색을 흰색으로 설정
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <ListItem>
                <Box sx={{ flexGrow: 1 }}>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#1976d2",
                          marginBottom: "8px",
                        }}
                      >
                        {plan.name}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" sx={{ color: "#888" }}>
                        {`${plan.location} | ${plan.startDate} - ${plan.endDate}`}
                      </Typography>
                    }
                  />
                  <Box
                    sx={{
                      display: "flex",
                      mt: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    {plan.itinerary
                      .flatMap((day) => day.places)
                      .slice(0, visibleImagesCount[plan.id] || 4)
                      .map((place, idx) => (
                        <CardMedia
                          key={idx}
                          component="img"
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: "8px",
                            marginRight: "8px",
                            marginBottom: "8px",
                            objectFit: "cover",
                          }}
                          image={place.image}
                          alt={place.name}
                        />
                      ))}
                    {(plan.itinerary.flatMap((day) => day.places).length >
                      (visibleImagesCount[plan.id] || 4) ||
                      visibleImagesCount[plan.id] > 4) && (
                      <IconButton
                        size="small"
                        onClick={() =>
                          visibleImagesCount[plan.id] >=
                          plan.itinerary.flatMap((day) => day.places).length
                            ? handleCollapseClick(plan.id)
                            : handleExpandClick(plan.id)
                        }
                        sx={{
                          width: 32,
                          height: 32,
                          minWidth: 0,
                          padding: 0,
                          borderRadius: "8px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "transparent", // 배경 투명하게 설정
                          color: "#1976d2",
                          boxShadow: "none",
                          marginTop: "-4px", // 이 부분을 추가하여 버튼을 조금 위로 올림
                          "&:hover": {
                            backgroundColor: "transparent", // 호버 시에도 투명하게 유지
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                          },
                          "&:focus": {
                            outline: "none",
                          },
                        }}
                      >
                        {visibleImagesCount[plan.id] >=
                        plan.itinerary.flatMap((day) => day.places).length ? (
                          <RemoveIcon />
                        ) : (
                          <AddIcon />
                        )}
                      </IconButton>
                    )}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    position: "absolute",
                    top: 8,
                    right: 8,
                  }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleEditClick(plan)}
                    sx={{
                      width: 32,
                      height: 32,
                      minWidth: 0,
                      padding: 0,
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "transparent", // 배경 투명하게 설정
                      color: "#1976d2",
                      boxShadow: "none", // 기본 상태에서 입체 효과 제거
                      "&:hover": {
                        backgroundColor: "transparent", // 호버 시에도 투명하게 유지
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // 호버 시 입체 효과 추가
                      },
                    }}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleDetailClick(plan)}
                    sx={{
                      width: 32,
                      height: 32,
                      minWidth: 0,
                      padding: 0,
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "transparent", // 배경 투명하게 설정
                      color: "#1976d2",
                      boxShadow: "none", // 기본 상태에서 입체 효과 제거
                      "&:hover": {
                        backgroundColor: "transparent", // 호버 시에도 투명하게 유지
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // 호버 시 입체 효과 추가
                      },
                    }}
                  >
                    <ArrowForwardIosIcon />
                  </Button>
                </Box>
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
            maxWidth: "600px",
            borderRadius: "16px",
            padding: "20px",
            overflow: "hidden", // 스크롤바를 숨기기 위해 overflow 설정
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
            maxHeight: "450px", // 모달의 최대 높이 설정
            "::-webkit-scrollbar": { display: "none" }, // 스크롤바를 숨김
          }}
        >
          {selectedPlan && (
            <Box sx={{ py: 2 }}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  borderRadius: "12px",
                  backgroundColor: "#f8f9fa",
                  marginBottom: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: 1 }}
                >
                  {selectedPlan.name}
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>Location:</strong> {selectedPlan.location}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>Start Date:</strong> {selectedPlan.startDate}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>End Date:</strong> {selectedPlan.endDate}
                </Typography>
              </Paper>

              {/* Itinerary Section */}
              <Box sx={{ mt: 4 }}>
                {selectedPlan.itinerary &&
                  selectedPlan.itinerary.length > 0 && (
                    <>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", marginBottom: 2 }}
                      >
                        Itinerary
                      </Typography>
                      {selectedPlan.itinerary.map((day, index) => (
                        <Box key={index} sx={{ mb: 3 }}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: "bold",
                              marginBottom: 1,
                              color: "#1976d2",
                            }}
                          >
                            Day {day.day}: {day.date.toLocaleDateString()}
                          </Typography>
                          {day.places.map((place, idx) => (
                            <Card
                              key={idx}
                              sx={{
                                display: "flex",
                                marginBottom: 2,
                                borderRadius: "12px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                overflow: "hidden",
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": {
                                  transform: "translateY(-3px)",
                                },
                              }}
                            >
                              <CardMedia
                                component="img"
                                sx={{ width: 120, objectFit: "cover" }}
                                image={place.image}
                                alt={place.name}
                              />
                              <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                  variant="h6"
                                  sx={{ fontWeight: "bold" }}
                                >
                                  {place.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  sx={{ marginTop: 1 }}
                                >
                                  {place.time} | {place.type}
                                </Typography>
                              </CardContent>
                            </Card>
                          ))}
                          {day.travel && (
                            <Typography variant="body2" color="text.secondary">
                              이동 시간: {day.travel.duration}
                            </Typography>
                          )}
                        </Box>
                      ))}
                    </>
                  )}
              </Box>
            </Box>
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
