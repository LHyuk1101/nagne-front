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
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const sampleData = {
  food: [
    {
      id: 1,
      title: "LOTTE City Hotel Myeongdong",
      overview: "Best food in town",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/60661791.webp?k=fc40ef70809526a7650df81016752406bac679a46a8ff2193a503e8f57afa558&o=",
    },
    {
      id: 2,
      title: "Fairfield by Marriott Seoul",
      overview: "Best food in town",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/555401115.webp?k=5875edcd1cb5b2142d5551cd144b329cb70b8c433d2f5c4f16b463b1f6e3cfda&o=",
    },
    {
      id: 3,
      title: "Nine Tree Premier Hotel Insadong Myeongdong",
      overview: "Best food in town",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/555401115.webp?k=5875edcd1cb5b2142d5551cd144b329cb70b8c433d2f5c4f16b463b1f6e3cfda&o=",
    },
    {
      id: 4,
      title: "Gongsimga Hanok Guesthouse",
      overview: "Great ambiance",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipOnRyMbbvJRr2QdDbMyw2Vfn_JY1dOwMNOmnAHo=w408-h306-k-no",
    },
  ],
  places: [
    {
      id: 1,
      title: "GunSan Squid",
      overview:
        "Located in Busan, a 3-minute walk from Haeundae Beach, Shilla Stay Haeundae has accommodations with a fitness center, free private parking, a shared lounge and a restaurant.",
      image: "https://cdn.myro.co.kr/prod/image/city/Busan.jpg",
    },
    {
      id: 2,
      title: "KwonSookSoo",
      overview:
        "Located in Busan, within a 2-minute walk of Haeundae Beach and 0.6 miles of Haeundae Station, Plea De Blanc Hotel & Residence provides accommodations with a fitness center and free WiFi throughout the...",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNdf87vInsBRQnP1Wc5Cyr-Fl-SyjUfvK97DHpQ=w408-h544-k-no",
    },
    {
      id: 3,
      title: "Suhadong Main Branch",
      overview:
        "Baymond Hotel is located on the beachfront in Busan, a 3-minute walk from Haeundae Beach and 0.4 miles from Haeundae Station. This 4-star hotel offers room service, a 24-hour front desk and free WiFi....",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipOgJlRfnBnRsmeatayuF2NUTZJFv55Cr9KmnwII=w408-h306-k-no",
    },
    {
      id: 4,
      title: "GOO STK 528",
      overview:
        "Baymond Hotel is located on the beachfront in Busan, a 3-minute walk from Haeundae Beach and 0.4 miles from Haeundae Station. This 4-star hotel offers room service, a 24-hour front desk and free WiFi....",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNLWVX8y9GGvW7Jsv34TiCjwdT15fvxsANVDTNm=w426-h240-k-no",
    },
  ],
  accommodations: [
    {
      id: 1,
      title: "Shilla Stay Haeundae",
      overview:
        "Located in Busan, a 3-minute walk from Haeundae Beach, Shilla Stay Haeundae has accommodations with a fitness center, free private parking, a shared lounge and a restaurant.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/60661791.webp?k=fc40ef70809526a7650df81016752406bac679a46a8ff2193a503e8f57afa558&o=",
    },
    {
      id: 2,
      title: "Plea De Blanc Hotel & Residence",
      overview:
        "Located in Busan, within a 2-minute walk of Haeundae Beach and 0.6 miles of Haeundae Station, Plea De Blanc Hotel & Residence provides accommodations with a fitness center and free WiFi throughout the...",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/555401115.webp?k=5875edcd1cb5b2142d5551cd144b329cb70b8c433d2f5c4f16b463b1f6e3cfda&o=",
    },
    {
      id: 3,
      title: "Baymond Hotel",
      overview:
        "Baymond Hotel is located on the beachfront in Busan, a 3-minute walk from Haeundae Beach and 0.4 miles from Haeundae Station. This 4-star hotel offers room service, a 24-hour front desk and free WiFi....",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipOgJlRfnBnRsmeatayuF2NUTZJFv55Cr9KmnwII=w408-h306-k-no",
    },
  ],
};

// Utility function to truncate text
const truncateText = (text, maxLength) => {
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
  padding: "16px", // Adjust padding as needed
});

const StyledButton = styled(Button)({
  marginTop: "16px", // Add margin to the top to create space between content and button
});

function TravelInfoMore() {
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState("");
  const [templateData, setTemplateData] = useState(sampleData.food);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    switch (tab) {
      case 0:
        setTemplateData(sampleData.food);
        break;
      case 1:
        setTemplateData(sampleData.accommodations);
        break;
      case 2:
        setTemplateData(sampleData.places);
        break;
      default:
        setTemplateData(sampleData.food);
        break;
    }
  }, [tab]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = templateData.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.overview.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Container>
      {/* 검색창 */}
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
        sx={{ my: 2 }}
      />

      {/* 탭 */}
      <Tabs
        value={tab}
        onChange={handleTabChange}
        centered
        sx={{ justifyContent: "center" }}
      >
        <Tab
          label="Restaurants"
          sx={{ textAlign: "center", minWidth: "33.33%" }}
        />
        <Tab
          label="Accommodation"
          sx={{ textAlign: "center", minWidth: "33.33%" }}
        />
        <Tab
          label="Tourist Spots"
          sx={{ textAlign: "center", minWidth: "33.33%" }}
        />
      </Tabs>

      {/* 리스트 */}
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {filteredData.map((item) => (
            <Grid item xs={6} sm={4} md={3} key={item.id}>
              <TemplateCard>
                <StyledCardMedia image={item.image} title={item.title} />
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
