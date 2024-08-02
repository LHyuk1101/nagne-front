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
import { useState } from "react";

const Container = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  width: "100%",
  margin: "0 auto",
  boxSizing: "border-box",
  backgroundColor: "#ffffff",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  position: "relative",
  paddingBottom: "60px",
}));

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: 120,
  backgroundColor: "#ffffff",
  padding: theme.spacing(3),
  boxSizing: "border-box",
  width: "100%",
}));

const HeaderColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const DestinationColumn = styled(HeaderColumn)({
  flex: "0 0 35%",
});

const DateColumn = styled(HeaderColumn)({
  flex: "0 0 40%",
});

const EmptyColumn = styled(HeaderColumn)({
  flex: "0 0 10%",
});

const Destination = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  fontWeight: 700,
  color: "#464555",
  letterSpacing: "-0.5px",
}));

const DateRange = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const DateText = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  color: "#464555",
  letterSpacing: "0.25px",
  alignSelf: "center",
}));

const Map = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 220,
}));

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

const PlaceList = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const PlaceHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 1.5),
}));

const PlaceNumber = styled(Typography)(({ theme }) => ({
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

const PlaceName = styled(Typography)(({ theme }) => ({
  flex: 1,
  fontSize: 18,
  fontWeight: 500,
}));

const AddPlaceButton = styled(Button)(({ theme }) => ({
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
// TODO 컴포넌트 분리할 Place 아이템
const PlaceItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  borderBottom: "1px solid #e0e0e0",
}));

const PlaceItemNumber = styled(Typography)(({ theme, backgroundColor }) => ({
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
}));

const PlaceItemContent = styled(Box)({
  flex: 1,
});

const PlaceItemName = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  marginBottom: theme.spacing(0.5),
}));

const PlaceItemAddress = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: "#666",
}));

const PlaceImgContent = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  marginRight: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
}));

const PlaceImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
const PlaceItemActions = styled(Box)({
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

const SeoulTripUI = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleDeleteItems = (e) => {
    e.preventDefault();
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
    {
      id: 4,
      name: "Myeongdong Shopping Street",
      address: "Myeongdong-gil, Jung-gu, Seoul",
    },
    {
      id: 5,
      name: "Myeongdong Shopping Street",
      address: "Myeongdong-gil, Jung-gu, Seoul",
    },
    {
      id: 6,
      name: "Myeongdong Shopping Street",
      address: "Myeongdong-gil, Jung-gu, Seoul",
    },
  ];

  return (
    <Container>
      <Header>
        <DestinationColumn>
          <Destination>SEOUL</Destination>
        </DestinationColumn>
        <EmptyColumn />
        <DateColumn>
          <DateRange>
            <DateText>2024.08.19(MON)</DateText>
            <DateText style={{ margin: "4px 0" }}>TO</DateText>
            <DateText>2024.08.22(THU)</DateText>
          </DateRange>
        </DateColumn>
      </Header>

      <Map></Map>
      <StyledTabs value={tabValue} onChange={handleTabChange}>
        <StyledTab label="Places" />
        <StyledTab label="Accommodation" />
        <StyledTab label="Restaurants" />
      </StyledTabs>

      <PlaceHeader>
        <PlaceNumber>3</PlaceNumber>
        <PlaceName>Reset</PlaceName>
        <AddPlaceButton>+ Add Place</AddPlaceButton>
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
        <CreateScheduleButton variant="contained">
          Create Schedule
        </CreateScheduleButton>
      </ButtonContainer>
    </Container>
  );
};

export default SeoulTripUI;
