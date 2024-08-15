import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchPlaceDetails } from "../../services/template/info";
import defaultImg from "../../assets/images/place/default_img.png";

const PlaceDetail = () => {
  const { id } = useParams(); // URL에서 id를 가져옴
  const navigate = useNavigate();

  const [placeDetails, setPlaceDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // 컴포넌트가 마운트되었을 때 데이터를 가져옴
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetchPlaceDetails(id);
        setPlaceDetails(response);
        const initialIsLiked =
          localStorage.getItem(`place-${id}-liked`) === "true";
        setIsLiked(initialIsLiked);
        setLikeCount(response.items.likes + (initialIsLiked ? 1 : 0));
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  const handleLikeToggle = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);

    if (newIsLiked) {
      setLikeCount(likeCount + 1);
      localStorage.setItem(`place-${id}-liked`, "true");
    } else {
      setLikeCount(likeCount - 1);
      localStorage.removeItem(`place-${id}-liked`);
    }
  };

  const handleBackBtn = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading place details.</Typography>;
  }

  return (
    <Box
      sx={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box sx={{ marginBottom: "2rem" }}>
        <IconButton
          onClick={handleBackBtn}
          sx={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            color: "black",
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box
        component="img"
        src={placeDetails.items.imgUrl || defaultImg}
        alt={placeDetails.items.title}
        sx={{
          width: "100%",
          maxWidth: "600px",
          height: "300px",
          borderRadius: "8px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          mt: 0.5,
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <IconButton
          onClick={handleLikeToggle}
          sx={{ color: isLiked ? "red" : "grey" }}
        >
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography variant="body2" sx={{ ml: 1 }}>
          {likeCount} Likes
        </Typography>
      </Box>
      <Typography variant="h5" align="center" gutterBottom>
        {placeDetails.items.title}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        gutterBottom
        dangerouslySetInnerHTML={{ __html: placeDetails.items.overview }}
      />
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "grey.300",
          my: 2,
          width: "100%",
          maxWidth: "600px",
        }}
      />
      <Typography variant="body2" align="center" gutterBottom>
        Address: {placeDetails.items.address}
      </Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "grey.300",
          my: 2,
          width: "100%",
          maxWidth: "600px",
        }}
      />
      <Typography variant="body2" align="center" gutterBottom>
        Operating hours : {placeDetails.items.opentime}
      </Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "grey.300",
          my: 2,
          width: "100%",
          maxWidth: "600px",
        }}
      />
      <Typography variant="body2" align="center" gutterBottom>
        Contact Number: {placeDetails.items.contactNumber}
      </Typography>
    </Box>
  );
};

export default PlaceDetail;
