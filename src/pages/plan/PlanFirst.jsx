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
import { useWarningDialog } from "../../hooks/useWarningDialog.jsx";
import WarningDialog from "../../components/UI/WarningDialog.jsx";

const PlanFirst = () => {
  const { startDate, endDate, areaCode, setSelectedPlaces } = usePlanStore();
  const { user } = useUserStore();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const { selectedPlaces, selectedLodgings } = useSelectedPlaces();
  usePreventRefresh();
  const { isOpen, message, openWarningDialog, closeWarningDialog } =
    useWarningDialog();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const validatedCreateSchedule = () => {
    if (!selectedPlaces.length > 0) {
      openWarningDialog(
        "No places have been selected. Please select at least one place.",
      );
      return false;
    }

    if (!selectedLodgings.length > 0) {
      openWarningDialog(
        "No accommodations have been selected. Please select at least one accommodation.",
      );
      return false;
    }

    return true;
  };

  const handleCreateSchedule = () => {
    if (!validatedCreateSchedule()) {
      return;
    }

    const planData = {
      places: [...selectedPlaces, ...selectedLodgings].map((place) => ({
        id: place.id,
        name: place.title,
        contentType: place.contentTypeId,
        overview: place.overview,
        lat: place.lat,
        lng: place.lng,
      })),
      startDay: startDate,
      endDay: endDate,
      areaCode: areaCode,
    };

    if (!user.userId) {
      localStorage.setItem("returnTo", LINKS.PLAN.path);
      localStorage.setItem("planData", JSON.stringify(planData));
      navigate(LINKS.LOGIN.path, { state: { returnTo: location.pathname } });
      return;
    }

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
      <WarningDialog
        isOpen={isOpen}
        message={message}
        onClose={closeWarningDialog}
      />
    </>
  );
};

export default PlanFirst;
