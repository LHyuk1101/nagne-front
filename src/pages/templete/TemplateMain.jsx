import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import AreaScroll from "../../components/Template/AreaScroll";
import TemplateCardComponent from "../../components/Template/TemplateCard";
import { useQuery } from "@tanstack/react-query";
import { fetchTemplates } from "../../services/template/template.js";
const TemplateMain = () => {
  const [selectedArea, setSelectedArea] = useState({
    name: "Seoul",
    code: 1,
  });
  const [templateData, setTemplateData] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  //
  // useEffect(() => {
  //   fetchTemplates(selectedArea);
  // }, [selectedArea]);

  //
  const { data, isLoading, error } = useQuery({
    queryKey: ["templateList", selectedArea],
    queryFn: () => fetchTemplates(selectedArea),
    staleTime: 5 * 60 * 1000,
  });

  const areacodes = [
    { name: "Seoul", code: 1 },
    { name: "Incheon", code: 2 },
    { name: "Daejeon", code: 3 },
    { name: "Daegu", code: 4 },
    { name: "Gwangju", code: 5 },
    { name: "Busan", code: 6 },
    { name: "Ulsan", code: 7 },
    { name: "Gyeonggi", code: 31 },
    { name: "Gangwon", code: 32 },
    { name: "Chungbuk", code: 33 },
    { name: "Chungnam", code: 34 },
    { name: "Gyeongbuk", code: 35 },
    { name: "Gyeongnam", code: 36 },
    { name: "Jeonbuk", code: 37 },
    { name: "Jeonnam", code: 38 },
    { name: "Jeju", code: 39 },
  ];

  const renderContent = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (data) {
      const mappedData = data.items.map((template) => ({
        title: template.subject,
        description: template.overview,
        image: template.thumbnailUrl,
      }));
      return (
        <>
          <Box>
            {mappedData.map((template, index) => (
              <TemplateCardComponent
                key={index}
                title={template.title}
                description={template.description}
                image={template.image}
              />
            ))}
          </Box>
        </>
      );
    }

    return null;
  };

  const handleAreaCode = (areaName) => {
    const selectedArea = areacodes
      .filter((area) => area.name === areaName)
      .slice(0, 1);
    setSelectedArea(selectedArea);
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
        <AreaScroll onAreaClick={handleAreaCode} />
      </Box>

      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Featured Templates
      </Typography>
      {renderContent()}
    </Box>
  );
};

export default TemplateMain;
