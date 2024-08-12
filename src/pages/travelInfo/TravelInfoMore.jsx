import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Tabs,
  Tab,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPlacesByRegion } from "../../services/template/infoMore";

const truncateText = (text, maxLength) => {
  if (!text) return ""; // text가 undefined 또는 null인 경우 빈 문자열 반환
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const TemplateCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  paddingTop: "75%", // 4:3 aspect ratio
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "16px",
});

function TravelInfoMore() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedArea, tabIndex } = location.state || {
    selectedArea: "",
    tabIndex: 2,
  };

  const [tab, setTab] = useState(tabIndex);
  const [search, setSearch] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["places", selectedArea],
    queryFn: () => fetchPlacesByRegion(selectedArea),
    enabled: !!selectedArea,
  });

  const [templateData, setTemplateData] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const places = data;
      filterDataByTab(tab, places);
    } else if (data && data.result === "SUCCESS" && Array.isArray(data.items)) {
      const places = data.items;
      filterDataByTab(tab, places);
    } else {
      console.error("Unexpected data format:", data);
      setTemplateData([]);
    }
  }, [tab, data]);

  const filterDataByTab = (selectedTab, places) => {
    switch (selectedTab) {
      case 0:
        setTemplateData(places.filter((place) => place.contentTypeId === 80)); // 숙박
        break;
      case 1:
        setTemplateData(places.filter((place) => place.contentTypeId === 82)); // 음식점
        break;
      case 2:
        setTemplateData(places.filter((place) => place.contentTypeId === 76)); // 관광지
        break;
      default:
        setTemplateData([]);
        break;
    }
  };

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
    setTemplateData([]); // 탭 변경 시 데이터 초기화
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCardClick = (item) => {
    navigate("/place", { state: item });
  };

  const filteredData = templateData.filter(
    (item) =>
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.overview?.toLowerCase().includes(search.toLowerCase()),
  );

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data</Typography>;
  }

  return (
    <Container>
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
        sx={{ my: 2 }}
      />

      <Tabs
        value={tab}
        onChange={handleTabChange}
        centered
        sx={{ justifyContent: "center" }}
      >
        <Tab
          label="Accommodation"
          sx={{ textAlign: "center", minWidth: "33.33%" }}
        />
        <Tab
          label="Restaurants"
          sx={{ textAlign: "center", minWidth: "33.33%" }}
        />
        <Tab
          label="Tourist Spots"
          sx={{ textAlign: "center", minWidth: "33.33%" }}
        />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {filteredData.map((item) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              key={item.id}
              onClick={() => handleCardClick(item)} // 카드 클릭 시 상세 페이지로 이동
              sx={{ cursor: "pointer" }} // 클릭 가능하도록 커서 변경
            >
              <TemplateCard>
                <StyledCardMedia
                  image={item.thumbnailUrl || "/default-image-path.jpg"}
                  title={item.title}
                />
                <StyledCardContent>
                  <Box>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {truncateText(item.overview, 70)}
                    </Typography>
                  </Box>
                </StyledCardContent>
              </TemplateCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default TravelInfoMore;
