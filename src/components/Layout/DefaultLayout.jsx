import { Container, Grid, styled } from "@mui/material";
import Header from "./Header.jsx";

const StyledDiv = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  maxWidth: "600px",
  padding: "0",
  margin: "0 auto",
  position: "relative",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "1px",
    background: theme.palette.divider,
    display: "none",
  },

  "&::before": {
    left: "-1px",
  },

  "&::after": {
    right: "-1px",
  },

  "@media (min-width: 601px)": {
    "&::before, &::after": {
      display: "block",
    },
  },
}));

const DefaultLayout = ({ children }) => {
  return (
    <StyledDiv>
      <Header />
      <Container style={{ maxWidth: "600px", padding: "0" }}>
        <Grid
          container
          spacing={0}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Grid item xs={12} sm={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </StyledDiv>
  );
};

export default DefaultLayout;
