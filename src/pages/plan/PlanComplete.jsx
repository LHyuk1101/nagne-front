import React, { useState, useRef, useEffect } from "react";
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
import { mockPlanData } from "./mockData"; // mock data를 사용한 예시입니다. 실제 데이터로 교체 가능

// 콘텐츠 타입에 따라 아이콘을 선택하는 함수
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

const PlanComplete = () => {
  const [expanded, setExpanded] = useState({});
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const containerRef = useRef(null);

  // 각 패널의 확장 상태를 관리하는 함수
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded((prev) => ({ ...prev, [panel]: isExpanded }));
  };

  // 모든 패널을 확장 또는 축소하는 함수
  const handleToggleAll = () => {
    const newExpandedState = !isAllExpanded;
    setIsAllExpanded(newExpandedState);
    const newExpanded = {};
    mockPlanData.dayPlans.forEach((day) => {
      newExpanded[`day${day.day}`] = newExpandedState;
    });
    setExpanded(newExpanded);
  };

  // 플랜을 저장하는 함수 (예시)
  const handleSavePlan = () => {
    console.log("Save plan clicked");
  };

  // 패널이 확장될 때 스크롤을 자동으로 아래로 이동시키는 효과
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [expanded]);

  return (
    <Box
      ref={containerRef}
      sx={{
        maxWidth: 600,
        margin: "auto",
        p: 2,
        pb: 10,
        height: "calc(100vh - 56px)", // 헤더 높이를 뺀 전체 높이
        overflowY: "auto", // 스크롤 가능하게 설정
        "&::-webkit-scrollbar": { display: "none" }, // 스크롤바 숨기기
        scrollbarWidth: "none", // Firefox용 스크롤바 숨기기
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{ mb: 3, fontWeight: "bold" }}
      >
        {mockPlanData.subject}
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
                  color: "#ff5722", // 스위치의 기본 색상 (오렌지)
                },
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#4caf50", // 체크된 스위치의 색상 (녹색)
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#4caf50", // 체크된 상태의 트랙 배경색
                },
                "& .MuiSwitch-track": {
                  backgroundColor: "#ffccbc", // 기본 트랙 배경색 (밝은 오렌지)
                },
              }}
            />
          }
          label="Check all"
          sx={{
            color: "#000", // 라벨 텍스트 색상 변경 (검정색)
          }}
        />
      </Box>

      {mockPlanData.dayPlans.map((dayPlan) => (
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
              backgroundColor: "#98D8C8", // 아코디언의 배경색 (커스텀 가능)
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
              {dayPlan.places.map((place, placeIndex, places) => (
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
                          {place.title}
                        </Typography>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography
                            variant="body2"
                            color="text.primary"
                            sx={{ mb: 1 }}
                          >
                            {place.placeSummary}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {place.reasoning}
                          </Typography>
                        </React.Fragment>
                      }
                      sx={{ ml: 2 }}
                    />
                    <Avatar sx={{ bgcolor: "secondary.light", ml: 1 }}>
                      {getIconByContentType(place.contentTypeId)}
                    </Avatar>
                  </ListItem>
                  {placeIndex < places.length - 1 && (
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
                        {`${places[placeIndex + 1].moveTime}minutes`}
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
