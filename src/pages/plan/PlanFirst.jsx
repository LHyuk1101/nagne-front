import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LINKS from "../../routes/Links.jsx";
import usePlanStore from "../../store/PlanContext.js";
import { useSelectedPlaces } from "../../store/place/PlaceContext.jsx";
import {
  StyledTab,
  StyledTabs,
  ButtonContainer,
  CreateScheduleButton,
} from "./PlanFirst.style.jsx";
import PlaceTab from "../place/PlaceTab.jsx";
import AccommodationTab from "../place/AccommodationTab.jsx";

const PlanFirst = () => {
  const { startDate, endDate, placeName, areaCode, setSelectedPlaces } =
    usePlanStore();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const { selectedPlaces, selectedLodgings } = useSelectedPlaces();

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

  const handleTabChange = (event, newValue) => {
    console.log(newValue);
    setTabValue(newValue);
  };

  const handleCreateSchedule = () => {
    const planData = {
      places: [...selectedPlaces, ...selectedLodgings].map((place) => ({
        id: place.id,
        name: place.title,
        contentType: place.contentTypeId,
        overview: place.overview,
      })),
      startDay: startDate,
      endDay: endDate,
      areaCode: areaCode,
    };
    console.log("Navigating to PlanComplete with planData:", planData);
    navigate(LINKS.PLAN.path, { state: { planData } });
  };

  return (
    <>
      <StyledTabs value={tabValue} onChange={handleTabChange}>
        <StyledTab label="Places" />
        <StyledTab label="Accommodation" />
      </StyledTabs>

      {tabValue === 0 && <PlaceTab />}
      {tabValue === 1 && <AccommodationTab />}

      <ButtonContainer>
        <CreateScheduleButton
          onClick={handleCreateSchedule}
          variant="contained"
        >
          Create Schedule
        </CreateScheduleButton>
      </ButtonContainer>
    </>
  );
};

export default PlanFirst;
