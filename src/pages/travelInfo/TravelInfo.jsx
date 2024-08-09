import { Box, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import AreaScroll from "../../components/Template/AreaScroll";
import { theme } from "../../styles/globalStyle";
import RecommendedSection from "../../components/Template/RecommendedSection";

const TravelInfo = () => {
  const [selectedArea, setSelectedArea] = useState("Seoul");

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginTop: "3rem" }}>
        <AreaScroll onAreaClick={setSelectedArea} />
        <RecommendedSection />
      </Box>
    </ThemeProvider>
  );
};

export default TravelInfo;
