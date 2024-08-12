import { Delete as DeleteIcon } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlaceModal from "../place/PlaceModal.jsx";
import LINKS from "../../routes/Links.jsx";
import usePlanStore from "../../store/PlanContext.js";
import { useSelectedPlaces } from "../../store/place/PlaceContext.jsx";
import {
  StyledTab,
  StyledTabs,
  ContentArea,
  PlaceList,
  PlaceHeader,
  PlaceNumber,
  PlaceName,
  AddPlaceButton,
  ButtonContainer,
  CreateScheduleButton,
  PlaceItem,
  PlaceItemNumber,
  PlaceItemContent,
  PlaceItemName,
  PlaceItemAddress,
  PlaceImgContent,
  PlaceImage,
  PlaceItemActions,
} from "./PlanFirst.style.jsx";
import { IconColor } from "../../constants/constant.js";
import IconButton from "@mui/material/IconButton";

const PlanFirst = () => {
  const { startDate, endDate, placeName, lat, lng } = usePlanStore();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedPlaces, removePlace } = useSelectedPlaces();

  console.log(placeName);
  console.log(lat);
  console.log(lng);

  // useEffect(() => {
  //   initRender();
  // }, []);
  //
  // const initRender = () => {
  //   redirectStartDate(placeName, startDate, endDate);
  // };
  //
  // const redirectStartDate = (placeName, planStartDate, planEndDate) => {
  //   if (
  //     placeName === undefined ||
  //     planStartDate === undefined ||
  //     planEndDate === undefined
  //   ) {
  //     navigate({
  //       pathname: LINKS.CREATE.path,
  //     });
  //   }
  // };

  const renderRefreshNotification = () => {};

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleDeleteItems = (e) => {
    e.preventDefault();
  };

  const handleRedirectButton = (e) => {
    e.preventDefault();
    setSelectedPlaces(selectedPlaces);
    navigate(LINKS.PLAN.path);
  };

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
          {selectedPlaces.map((item, index) => (
            <PlaceItem key={item.id}>
              <PlaceItemNumber
                backgroundColor={IconColor[index % IconColor.length]}
              >
                {index + 1}
              </PlaceItemNumber>
              <PlaceImgContent>
                <PlaceImage
                  src={item.placeUrlImages[0] || "기본 이미지 URL"}
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "기본 이미지 URL"; // 여기에 기본 이미지 URL을 넣으세요
                  }}
                />
              </PlaceImgContent>
              <PlaceItemContent>
                <PlaceItemName>{item.title}</PlaceItemName>
                <PlaceItemAddress>{item.address}</PlaceItemAddress>
              </PlaceItemContent>
              <PlaceItemActions>
                <IconButton size="small" onClick={() => removePlace(item.id)}>
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

      <PlaceModal open={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default PlanFirst;
