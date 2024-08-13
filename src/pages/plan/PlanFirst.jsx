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

const PlanFirst = () => {
  const { startDate, endDate, placeName, setSelectedPlaces } = usePlanStore();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const { selectedPlaces } = useSelectedPlaces();

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

  const handleRedirectButton = (e) => {
    e.preventDefault();
    setSelectedPlaces(selectedPlaces);
    navigate(LINKS.PLAN.path);
  };

  return (
    <>
      <StyledTabs value={tabValue} onChange={handleTabChange}>
        <StyledTab label="Places" />
        <StyledTab label="Accommodation" />
      </StyledTabs>

      {tabValue === 0 && <PlaceTab />}

      <ButtonContainer>
        <CreateScheduleButton
          onClick={handleRedirectButton}
          variant="contained"
        >
          Create Schedule
        </CreateScheduleButton>
      </ButtonContainer>
    </>
  );
};

export default PlanFirst;
