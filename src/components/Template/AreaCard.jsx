import React from "react";
import { Card, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";

const AreaCard = styled(Card)(({ theme }) => ({
  height: "140px",
  width: "140px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const AreaCardComponent = ({ imageUrl, title }) => (
  <AreaCard>
    <StyledCardMedia image={imageUrl} title={title} />
  </AreaCard>
);

export default AreaCardComponent;
