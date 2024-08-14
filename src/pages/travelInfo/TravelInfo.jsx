import { Box, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import { theme } from "../../styles/globalStyle";
import RecommendedSection from "../../components/Template/RecommendedSection";
import AreaScrollforTravelInfo from "../../components/Template/AreaScrollforTravelInfo";

const TravelInfo = () => {
  const [selectedArea, setSelectedArea] = useState(1);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginTop: "2rem" }}>
        <Box sx={{ paddingRight: "0.5rem", paddingLeft: "0.5rem" }}>
          <AreaScrollforTravelInfo onAreaClick={setSelectedArea} />
        </Box>
        <RecommendedSection selectedArea={selectedArea} />
      </Box>
    </ThemeProvider>
  );
};

export default TravelInfo;
