import { Box, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import { theme } from "../../styles/globalStyle";
import RecommendedSection from "../../components/Template/RecommendedSection";
import AreaScrollforTravelInfo from "../../components/Template/AreaScrollforTravelInfo";

const TravelInfo = () => {
  const [selectedArea, setSelectedArea] = useState("SEOUL");

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginTop: "3rem" }}>
        <AreaScrollforTravelInfo onAreaClick={setSelectedArea} />
        <RecommendedSection selectedArea={selectedArea} />
      </Box>
    </ThemeProvider>
  );
};

export default TravelInfo;
