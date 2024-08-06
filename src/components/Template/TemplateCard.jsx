import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

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
  height: "200px",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const TemplateCardComponent = ({ template }) => (
  <TemplateCard sx={{ mb: 4 }}>
    <StyledCardMedia image={template.image} title={template.title} />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h6" component="div">
        {template.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {template.description}
      </Typography>
      <Button variant="contained" fullWidth>
        View Template
      </Button>
    </CardContent>
  </TemplateCard>
);

export default TemplateCardComponent;
