import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import AreaScroll from "../components/Template/AreaScroll";
import TemplateCardComponent from "../components/Template/TemplateCard";

const TemplateMain = () => {
  const [selectedArea, setSelectedArea] = useState("Seoul");
  const [templateData, setTemplateData] = useState([
    {
      title: "Seoul 2-Day Urban Adventure",
      description:
        "Explore Seoul's vibrant neighborhoods, historical sites, and modern attractions in just 2 days. Perfect for first-time visitors.",
      image: "https://cdn.myro.co.kr/prod/image/city/Seoul.jpg",
    },
    {
      title: "Seoul 3-Day Cultural Journey",
      description:
        "Immerse yourself in Seoul's rich cultural heritage, from ancient palaces to contemporary art scenes over a delightful 3-day itinerary.",
      image:
        "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fus.123rf.com%2F450wm%2Fnattanaicj%2Fnattanaicj1512%2Fnattanaicj151200188%2F50305740-%25EC%2584%259C%25EC%259A%25B8-%25ED%2595%259C%25EA%25B5%25AD%25EC%2597%2590%25EC%2584%259C-%25EB%25B0%25A4%25EC%2597%2590-%25EA%25B2%25BD%25EB%25B3%25B5%25EA%25B6%2581-%25EA%25B6%2581%25EC%25A0%2584.jpg%3Fver%3D6&type=a340",
    },
    {
      title: "Seoul Weekend Foodie Tour",
      description:
        "Discover Seoul's best culinary experiences in a weekend. From street food markets to high-end dining, indulge in the city's diverse flavors.",
      image:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjZfMTk2%2FMDAxNjA4OTQ1NzI5NTE5.oPy3QNmBGExmibZdqtxM0Kn2hT6I6XObRoMixDbrKqYg.K_GDEWk-LFCfFzcqe_rvZ2ZiMjlgo5-wuR4Lf4hT2C4g.JPEG.mbillionaire7%2Fresized%25A3%25DF62bbd03c863788a9b76f074b229a8630.jpg&type=ofullfill340_600_png",
    },
  ]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    fetchTemplates(selectedArea);
  }, [selectedArea]);

  const fetchTemplates = async (area) => {
    try {
      const response = await fetch(`/api/templates?area=${area}`);
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
        {templateData.map((template, index) => (
          <TemplateCardComponent key={index} template={template} />
        ))}
      </Box>
    </Box>
  );
};

export default TemplateMain;
