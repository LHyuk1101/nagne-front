import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import AreaScroll from "../../components/Template/AreaScroll";
import TemplateCardComponent from "../../components/Template/TemplateCard";

const TemplateMain = () => {
  const [selectedArea, setSelectedArea] = useState("Seoul");
  const [templateData, setTemplateData] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    fetchTemplates(selectedArea);
  }, [selectedArea]);

  const fetchTemplates = async (area) => {
    try {
      const response = await fetch(`/api/templates?area=${area}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setTemplateData(data);
    } catch (error) {
      console.error("Error fetching template data:", error);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        maxWidth: isMobile ? "100%" : "600px",
        margin: "0 auto",
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mb: 6 }}
      >
        Explore Custom Travel Templates
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Popular Areas
      </Typography>
      <Box sx={{ mb: 6 }}>
        <AreaScroll onAreaClick={setSelectedArea} />
      </Box>

      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Featured Templates
      </Typography>
      <Box>
        {templateData.length > 0 ? (
          templateData.map((template, index) => (
            <TemplateCardComponent key={index} template={template} />
          ))
        ) : (
          <Typography variant="body1" align="center">
            No templates available for the selected area.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default TemplateMain;