import {
  Box,
  Typography,
  Button,
  styled,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PlaceModal from "../place/PlaceModal.jsx";
import LINKS from "../../routes/Links.jsx";
import { useStartPlan } from "../../store/PlanContext.jsx";

const StyledTabs = styled(Tabs)({
  borderBottom: "1px solid #e0e0e0",
});

const StyledTab = styled(Tab)({
  textTransform: "none",
  fontWeight: 600,
  color: "#4FC3F7",
  "&.Mui-selected": {
    color: "#4FC3F7",
  },
});

const ContentArea = styled(Box)({
  flex: 1,
  overflowY: "auto",
  padding: "2px 1px",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none",
  scrollbarWidth: "none",
});

export const PlaceList = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const PlaceHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 1.5),
}));

export const PlaceNumber = styled(Typography)(({ theme }) => ({
  width: 40,
  height: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: theme.spacing(2),
  fontSize: 45,
  transform: "translateY(-15%)",
  fontWeight: 700,
}));

export const PlaceName = styled(Typography)(({ theme }) => ({
  flex: 1,
  fontSize: 18,
  fontWeight: 500,
}));

export const AddPlaceButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary,
  fontWeight: 600,
  textTransform: "none",
  padding: theme.spacing(1, 0),
  justifyContent: "flex-start",
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "1rem",
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  padding: "0 1rem",
  maxWidth: "600px",
  margin: "0 auto",
  boxSizing: "border-box",
}));

const CreateScheduleButton = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary,
  color: "#ffffff",
  fontWeight: 600,
  fontSize: 16,
  "&:hover": {
    backgroundColor: "#1765CC",
  },
}));

export const PlaceItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  borderBottom: "1px solid #e0e0e0",
}));

export const PlaceItemNumber = styled(Typography)(
  ({ theme, backgroundColor }) => ({
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    color: "#ffffff",
    borderRadius: "50%",
    marginRight: theme.spacing(2),
    fontSize: 16,
    fontWeight: 600,
  }),
);

export const PlaceItemContent = styled(Box)({
  flex: 1,
});

export const PlaceItemName = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  marginBottom: theme.spacing(0.5),
}));

export const PlaceItemAddress = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: "#666",
}));

export const PlaceImgContent = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  marginRight: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
}));

export const PlaceImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const PlaceItemActions = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const backgroundColors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#7986CB",
  "#F06292",
  "#AED581",
];

const PlanFirst = () => {
  const { startDate, endDate, placeName } = useStartPlan();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  useEffect(() => {
    initRender();
  }, []);

  const initRender = () => {
    redirectStartDate(placeName, startDate, endDate);
  };

  const redirectStartDate = (placeName, planStartDate, planEndDate) => {
    if (
      placeName === undefined ||
      planStartDate === undefined ||
      planEndDate === undefined
    ) {
      navigate({
        pathname: LINKS.CREATE.path,
      });
    }
  };

  const renderRefreshNotification = () => {};

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePlacesSelected = (places) => {
    setSelectedPlaces(places);
    toggleModal();
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleDeleteItems = (e) => {
    e.preventDefault();
  };

  const handleRedirectButton = (e) => {
    e.preventDefault();
    navigate(LINKS.PLAN.path);
  };
  const placeItems = [
    {
      id: 1,
      name: "Gyeongbokgung Palace",
      address: "161 Sajik-ro, Jongno-gu, Seoul",
    },
    {
      id: 2,
      name: "Namsan Seoul Tower",
      address: "105 Namsangongwon-gil, Yongsan-gu, Seoul",
    },
    {
      id: 3,
      name: "Myeongdong Shopping Street",
      address: "Myeongdong-gil, Jung-gu, Seoul",
    },
  ];

  const responseDataEx = {
    startDay: "",
    endDay: "",
    place: [
      {
        name: "",
        contentTypeId: "",
        lat: "",
        lng: "",
        overview: "",
      },
    ],
    맛집: [
      {
        name: "",
        contentTypeId: "",
        lat: "",
        lng: "",
        overview: "",
      },
    ],
  };

  return (
    <>
      <StyledTabs value={tabValue} onChange={handleTabChange}>
        <StyledTab label="Places" />
        <StyledTab label="Accommodation" />
      </StyledTabs>

      <PlaceHeader>
        <PlaceNumber>3</PlaceNumber>
        <PlaceName>Reset</PlaceName>
        <AddPlaceButton onClick={toggleModal}>+ Add Place</AddPlaceButton>
      </PlaceHeader>
      <ContentArea>
        <PlaceList>
          {placeItems.map((item, index) => (
            <PlaceItem key={item.id}>
              <PlaceItemNumber
                backgroundColor={
                  backgroundColors[index % backgroundColors.length]
                }
              >
                {index + 1}
              </PlaceItemNumber>
              <PlaceImgContent>
                <PlaceImage
                  src="http://tong.visitkorea.or.kr/cms/resource/23/2378023_image2_1.JPG"
                  alt={item.name.substring(10)}
                />
              </PlaceImgContent>
              <PlaceItemContent>
                <PlaceItemName>{item.name}</PlaceItemName>
                <PlaceItemAddress>{item.address}</PlaceItemAddress>
              </PlaceItemContent>
              <PlaceItemActions>
                <IconButton size="small" onClick={handleDeleteItems}>
                  <DeleteIcon />
                </IconButton>
              </PlaceItemActions>
            </PlaceItem>
          ))}
        </PlaceList>
      </ContentArea>

      <ButtonContainer>
        <CreateScheduleButton
          onClick={handleRedirectButton}
          variant="contained"
        >
          Create Schedule
        </CreateScheduleButton>
      </ButtonContainer>

      <PlaceModal
        open={isModalOpen}
        onClose={toggleModal}
        onPlacesSelected={handlePlacesSelected}
        selectedPlaces={selectedPlaces}
      />
    </>
  );
};

export default PlanFirst;
