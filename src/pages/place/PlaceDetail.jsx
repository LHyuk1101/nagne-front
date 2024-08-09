import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const PlaceDetail = () => {
  const location = useLocation();
  const { imageUrl, title, content, address, infocenter } = location.state;

  return (
    <Box sx={{ padding: "2rem" }}>
      <Box
        component="img"
        src={imageUrl}
        alt={title}
        sx={{
          width: "100%",
          height: "300px",
          borderRadius: "8px",
          mb: 2,
        }}
      />
      <Typography variant="h5" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        {content}
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'grey.300', my: 2 ,marginTop:'2rem', marginBottom:'2rem'}} />
      <Typography variant="body2" align="center" gutterBottom>
        주소: {address}
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'grey.300', my: 2 ,marginTop:'2rem', marginBottom:'2rem'}} />
      <Typography variant="body2" align="center" gutterBottom>
        전화번호: {infocenter}
      </Typography>
    </Box>
  );
};

export default PlaceDetail;
