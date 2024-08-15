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
  CircularProgress, // 추가: 로딩 인디케이터
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  fetchPlacesByRegion,
  fetchPlacesBySearch,
} from "../../services/template/infoMore";
import defaultImg from "../../assets/images/place/default_img.png";

const truncateText = (text, maxLength) => {
  if (!text) return "";
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
  paddingTop: "75%",
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
  const [templateData, setTemplateData] = useState([]);

  // useQuery로 데이터 불러오기
  const { data, isLoading, error } = useQuery({
    queryKey: ["places", selectedArea, search],
    queryFn: () =>
      search
        ? fetchPlacesBySearch(selectedArea, search)
        : fetchPlacesByRegion(selectedArea),
    enabled: !!selectedArea,
    onError: (err) => {
      console.error("Error fetching data:", err);
    },
  });

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      filterDataByTab(tab, data);
    } else if (data && data.result === "SUCCESS" && Array.isArray(data.items)) {
      filterDataByTab(tab, data.items);
    } else {
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
    if (tab !== newValue) {
      setTab(newValue);
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCardClick = (item) => {
    navigate(`/place/${item.id}`, { state: item });
  };

  const filteredData = templateData.filter(
    (item) =>
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.overview?.toLowerCase().includes(search.toLowerCase()),
  );

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
        inputProps={{ autoComplete: "on" }}
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

      <Box sx={{ mt: 2, position: "relative" }}>
        {isLoading && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CircularProgress />
          </Box>
        )}
        {filteredData.length === 0 && !isLoading ? (
          <Typography variant="h6" sx={{ textAlign: "center", mt: 4 }}>
            No result
          </Typography>
        ) : (
          <Grid container spacing={2} sx={{ opacity: isLoading ? 0.5 : 1 }}>
            {filteredData.map((item) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                key={item.id}
                onClick={() => handleCardClick(item)}
                sx={{ cursor: "pointer" }}
              >
                <TemplateCard>
                  <StyledCardMedia
                    image={item.thumbnailUrl || defaultImg}
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
        )}
      </Box>
    </Container>
  );
}

export default TravelInfoMore;
