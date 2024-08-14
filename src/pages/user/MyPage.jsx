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
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();

  const [plans, setPlans] = useState([
    {
      plan: 1,
      subject: "즐거운 서울 여행, 제목",
      area: "SEOUL",
      startDay: "2024-08-13",
      endDay: "2024-08-23",
      thumbnailUrl:
        "http://tong.visitkorea.or.kr/cms/resource/86/2526386_image2_1.jpg",
      dayPlans: [
        {
          day: 1,
          places: [
            {
              order: 1,
              placeId: 6,
              title: "Amore Seongsu (아모레 성수)",
              moveTime: 0,
              contentTypeId: "80",
              placeImg:
                "http://tong.visitkorea.or.kr/cms/resource/86/2526386_image2_1.jpg",
            },
            {
              order: 2,
              placeId: 3,
              title: "Achasan Ecological Park (아차산생태공원)",
              moveTime: 5,
              contentTypeId: "76",
              placeImg:
                "http://tong.visitkorea.or.kr/cms/resource/86/2526386_image2_1.jpg",
            },
          ],
        },
        {
          day: 2,
          places: [
            {
              order: 1,
              placeId: 6,
              title: "Amore Seongsu (아모레 성수)",
              moveTime: 0,
              contentTypeId: "80",
              placeImg:
                "http://tong.visitkorea.or.kr/cms/resource/86/2526386_image2_1.jpg",
            },
            {
              order: 2,
              placeId: 3,
              title: "Achasan Ecological Park (아차산생태공원)",
              moveTime: 5,
              contentTypeId: "76",
              placeImg:
                "http://tong.visitkorea.or.kr/cms/resource/86/2526386_image2_1.jpg",
            },
          ],
        },
      ],
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleCardClick = (plan) => {
    setSelectedPlan(plan);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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
        <List>
          {plans.map((plan) => (
            <Paper
              key={plan.plan}
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
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 0,
                }}
              >
                <ListItemAvatar sx={{ minWidth: 140 }}>
                  <Avatar
                    variant="square"
                    src={plan.thumbnailUrl}
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
                    {plan.area}
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
            height: "auto", // 세로는 자동으로 조절
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
                  {selectedPlan.subject}
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>Location:</strong> {selectedPlan.area}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>Start Date:</strong> {selectedPlan.startDay}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>End Date:</strong> {selectedPlan.endDay}
                </Typography>
              </Paper>

              {/* Itinerary Section */}
              <Box sx={{ mt: 4 }}>
                {selectedPlan.dayPlans && selectedPlan.dayPlans.length > 0 && (
                  <>
                    {selectedPlan.dayPlans.map((dayPlan, index) => (
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
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                              overflow: "hidden",
                              transition: "transform 0.3s ease-in-out",
                              "&:hover": {
                                transform: "translateY(-3px)",
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
                              image={place.placeImg}
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
                                sx={{ fontWeight: "bold", fontSize: "1rem" }}
                              >
                                {place.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ marginTop: 1, fontSize: "0.875rem" }}
                              >
                                이동 시간: {place.moveTime}분
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
