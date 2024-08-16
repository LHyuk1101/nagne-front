import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/globalStyle";

const Support = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <img 
            src="https://nordace.com/wp-content/uploads/2022/09/Nordace_PBV-11-800x800-2.jpg" 
            alt="Nordace Backpack" 
            style={{ maxWidth: "100%", height: "auto", borderRadius: '8px' }}
          />
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            sx={{ fontWeight: 700 }}
          >
            Welcome to NAGNE!
          </Typography>
          <Typography
            variant="h6"
            component="p"
            gutterBottom
            align="center"
            sx={{ fontStyle: "italic" }}
          >
            Explore the Korea with Us
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Who We Are
          </Typography>
          <Typography variant="body1" paragraph>
            At Nagne, we are passionate about travel and committed
            to helping you explore the world's most exciting destinations.
            Whether you're planning a luxurious vacation, a quick weekend
            getaway, or an adventurous backpacking trip, we provide all the
            tools and resources to make your dream journey a reality.
          </Typography>
          <Typography variant="body1" paragraph>
            We connect with top hotels, airlines, and tour providers to bring
            you unbeatable deals and exclusive offers. Our mission is to create
            unforgettable travel experiences by making travel planning easy,
            affordable, and enjoyable.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            How to Use Our Page
          </Typography>
          <Typography variant="body1" paragraph>
            <ol style={{ paddingLeft: "20px", listStyleType: "decimal" }}>
              <li>
                <strong>Search Your Destination:</strong> Simply enter the
                location you want to explore in the search bar at the top of the
                page. You can also filter by date, budget, and type of
                experience (adventure, relaxation, culture, etc.).
              </li>
              <li>
                <strong>Discover Tailored Experiences:</strong> Based on your
                preferences, our site will present you with a curated list of
                destinations, activities, and accommodation options.
              </li>
              <li>
                <strong>Book Your Trip:</strong> When you’ve found the perfect
                itinerary, booking is just a click away! Follow our seamless
                booking process for hotels, and experiences.
              </li>
              <li>
                <strong>Enjoy Personalized Support:</strong> Our customer
                support team is available 24/7 to assist you with any queries or
                special requests.
              </li>
            </ol>
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Why Choose Us?
          </Typography>
          <Typography variant="body1" paragraph>
            <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
              <li>
                <strong>Expertise:</strong> Years of experience in the travel
                industry allow us to offer you top recommendations and our
                knowledge.
              </li>
              <li>
                <strong>Affordable Prices:</strong> We work hard to get the best
                deals, so you don’t have to break the bank to explore the world.
              </li>
              <li>
                <strong>Customer Satisfaction:</strong> Your satisfaction is our
                top priority. We’re with you every step of the way, from
                planning to your return home.
              </li>
            </ul>
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Get Started Today
          </Typography>
          <Typography variant="body1" paragraph>
            Ready to embark on your next adventure? Search our top destinations
            or get in touch with our travel specialists to start planning your
            dream trip.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Email:</strong> support@nagne.com
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Phone:</strong> +82 010-0000-0000
          </Typography>
          <Typography variant="body1">Follow us on social media.</Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Support;