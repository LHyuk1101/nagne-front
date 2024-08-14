import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LINKS from "../../routes/Links.jsx";
import usePlanStore from "../../store/PlanContext.js";
import useUserStore from "../../store/useUserStore.js";
import { useSelectedPlaces } from "../../store/place/PlaceContext.jsx";
import {
  StyledTab,
  StyledTabs,
  ButtonContainer,
  CreateScheduleButton,
} from "./PlanFirst.style.jsx";
import PlaceTab from "../place/PlaceTab.jsx";
import AccommodationTab from "../place/AccommodationTab.jsx";
import usePreventRefresh from "../../hooks/usePreventRefresh.jsx";

const PlanFirst = () => {
  const { startDate, endDate, areaCode, setSelectedPlaces } = usePlanStore();
  const { user } = useUserStore();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const { selectedPlaces, selectedLodgings } = useSelectedPlaces();
  usePreventRefresh();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCreateSchedule = () => {
    if (!user.userId) {
      alert("Create a scedule.");
      navigate(LINKS.LOGIN.path, { state: { returnTo: location.pathname } });
      return;
    }
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

    setSelectedPlaces([...selectedPlaces, ...selectedLodgings]);
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
