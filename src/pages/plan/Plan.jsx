import { Outlet } from "react-router-dom";
import { Box, styled } from "@mui/material";
import GoogleMap from "../../components/map/GoogleMap.jsx";
import PlanHeader from "./PlanHeader.jsx";
import { SelectedPlacesProvider } from "../../store/place/PlaceContext.jsx";

const Map = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 300,
  minHeight: 300,
}));

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

const Plan = () => {
  return (
    <Container>
      <SelectedPlacesProvider>
        <PlanHeader />
        <Map>
          <GoogleMap />
        </Map>
        <Outlet />
      </SelectedPlacesProvider>
    </Container>
  );
};

export default Plan;
