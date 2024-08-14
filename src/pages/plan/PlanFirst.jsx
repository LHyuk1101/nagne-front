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
<<<<<<< HEAD

const PlanFirst = () => {
  const { startDate, endDate, placeName, areaCode, setSelectedPlaces } =
    usePlanStore();
=======
import usePreventRefresh from "../../hooks/usePreventRefresh.jsx";
import { createPlan } from "../../services/plan/plan.js";

const PlanFirst = () => {
  const { startDate, endDate, areaCode, setSelectedPlaces } = usePlanStore();
>>>>>>> 4aa86114e82644830965a223d8830486f327d215
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const { selectedPlaces, selectedLodgings } = useSelectedPlaces();
  usePreventRefresh();

<<<<<<< HEAD
  const renderRefreshNotification = () => {};
=======
  const createPlanMutation = useMutation({
    mutationFn: createPlan,
    onSuccess: (data) => {
      setSelectedPlaces([...selectedPlaces, ...selectedLodgings]);
      navigate(LINKS.PLAN.path, { state: { planData: data } });
    },
    onError: (error) => {
      alert("Failed to make plan.");
    },
  });
>>>>>>> 4aa86114e82644830965a223d8830486f327d215

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
<<<<<<< HEAD
    console.log("Navigating to PlanComplete with planData:", planData);
    navigate(LINKS.PLAN.path, { state: { planData } });
=======
    createPlanMutation.mutate(planData);
>>>>>>> 4aa86114e82644830965a223d8830486f327d215
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
