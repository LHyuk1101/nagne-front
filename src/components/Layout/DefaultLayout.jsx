import { Container, Grid, styled } from "@mui/material";
import Header from "./Header.jsx";

const StyledDiv = styled(Container)(({ theme }) => ({
  maxWidth: "600px",
}));

const DefaultLayout = ({ children }) => {
  return (
    <StyledDiv>
      <Header />
      <Container style={{ maxWidth: "600px", marginTop: "3.25rem" }}>
        <Grid
          container
          spacing={2}
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
