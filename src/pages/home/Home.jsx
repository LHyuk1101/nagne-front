import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import LINKS from "../../routes/Links";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#3a86ff",
    },
    secondary: {
      main: "#ff006e",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }
        #root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `,
    },
  },
});

const Home = () => {
  const navigate = useNavigate();
  const handleStartPlanning = () => {
    navigate("/create");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Box
          sx={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://ifh.cc/g/CDKS51.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              }}
            >
              Discover Your Next Adventure
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 300,
                marginBottom: 4,
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              }}
            >
              Explore breathtaking destinations and create unforgettable
              memories
            </Typography>
            <Button
              variant="contained"
              onClick={handleStartPlanning}
              color="primary"
              size="large"
              sx={{
                borderRadius: "50px",
                padding: { xs: "8px 16px", sm: "10px 20px" },
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              Start Planning
            </Button>
          </Box>
        </Box>

        <Container sx={{ py: 4 }} maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "primary.main",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            Popular Destinations
          </Typography>
          <Grid container spacing={2}>
            {[
              {
                name: "Seongsan Sunrise Peak",
                description: "Experience the magic of tropical paradise",
                image:
                  "https://cdn.pixabay.com/photo/2019/09/07/09/55/sunrise-4458433_1280.jpg",
              },
              {
                name: "Gyeongbokgung (Palace)",
                description: "Indulge in romance and culture",
                image:
                  "https://cdn.pixabay.com/photo/2020/11/02/15/16/palace-5707010_1280.jpg",
              },
              {
                name: "Changgyeonggung (Palace)",
                description: "Discover the city that never sleeps",
                image:
                  "https://cdn.pixabay.com/photo/2020/11/21/23/55/changgyeonggung-5765370_1280.jpg",
              },
              {
                name: "Yeosu",
                description: "Immerse yourself in futuristic wonders",
                image:
                  "https://cdn.pixabay.com/photo/2018/10/21/04/05/night-view-3762230_1280.jpg",
              },
            ].map((destination, index) => (
              <Grid item key={index} xs={12} sm={6} md={6} lg={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: { xs: 120, sm: 140, md: 160 } }}
                    image={destination.image}
                    alt={destination.name}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 2 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "1rem", sm: "1.25rem" },
                      }}
                    >
                      {destination.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 300,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                      }}
                    >
                      {destination.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box
          component="footer"
          sx={{
            bgcolor: "text.secondary",
            py: 3,
            color: "white",
            mt: "auto",
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
              <Link
                to={LINKS.POLICY.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                User Privacy Policy
              </Link>
              <Typography variant="body2" sx={{ mx: 1 }}>
                |
              </Typography>
              <Link
                to={LINKS.USER_TOS.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                User Terms of Service
              </Link>
            </Box>

            <Box
              variant="body2"
              align="center"
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                flexWrap: "wrap",
                fontWeight: 300,
                marginTop: "1rem",
                fontSize: "15px",
              }}
            >
              <Typography sx={{ color: "white" }}>
                Source of images used :
              </Typography>
              <Link
                to={"https://www.google.co.kr/maps/?hl=en&entry=ttu"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Google Maps
              </Link>
              <Typography variant="body2">/</Typography>
              <Link
                to={
                  "https://www.booking.com/index.ko.html?label=gen173nr-1BCAEoggI46AdICVgEaH2IAQGYARe4AQfIAQzYAQHoAQGIAgGoAgO4Atmi7rUGwAIB0gIkZDJhZDkyZDMtYjQ1ZS00MTY4LTkwYTktZTU5YWNiZTFkZjli2AIF4AIB&sid=9aba5835fa945fb0fe14f7fa08ed0b7f&keep_landing=1&sb_price_type=total&"
                }
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Booking.com
              </Link>
              <Typography variant="body2">/</Typography>
              <Link
                to={"https://knto.or.kr/eng/index"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Korea Tourism Organization
              </Link>
            </Box>
            <Typography
              variant="body2"
              align="center"
              sx={{ fontWeight: 300, marginTop: "1rem" }}
            >
              © 2024 Nagne Travel. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
