import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPlaceDetails } from "../../services/template/info";
import defaultImg from "../../assets/images/place/default_img.png";

const PlaceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [placeDetails, setPlaceDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

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

  // `open_time` 데이터를 순서대로 변환하는 함수
  const formatOperatingHours = (openTimeStr) => {
    // 데이터가 없을 경우
    if (!openTimeStr && placeDetails.items.contentTypeId === 76) {
      return (
        <Typography variant="body2" align="center">
          Operating hours cannot be confirmed.
        </Typography>
      );
    } else if (!openTimeStr && placeDetails.items.contentTypeId === 80) {
      return (
        <Typography variant="body2" align="center">
          Check-in and check-out times cannot be confirmed
        </Typography>
      );
    }

    const daysOrder = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    try {
      if (openTimeStr.includes("Monday") || openTimeStr.includes("Tuesday")) {
        const openTimeArray = JSON.parse(openTimeStr.replace(/'/g, '"'));
        const dayMap = openTimeArray.reduce((acc, dayStr) => {
          const [day, time] = dayStr.split(", ");
          acc[day] = time;
          return acc;
        }, {});

        return (
          <>
            {daysOrder.map((day) => (
              <Typography key={day} variant="body2" align="center">
                {day} : {dayMap[day] || "Closed"}
              </Typography>
            ))}
            <Box sx={{ fontSize: "13px", marginTop: "1rem" }}>
              <Typography align="center">
                "Please contact the restaurant directly for the most up-to-date
                information.**"
              </Typography>
            </Box>
          </>
        );
      } else {
        return (
          <Typography variant="body2" align="center">
            {openTimeStr}
          </Typography>
        );
      }
    } catch (error) {
      return (
        <Typography variant="body2" align="center">
          Operating hours cannot be confirmed.
        </Typography>
      );
    }
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
      {placeDetails.items.contentTypeId === 80 && (
        <Typography variant="h6" align="center" gutterBottom>
          Check-in and Check-out Time
        </Typography>
      )}
      {placeDetails.items.contentTypeId === 82 && (
        <Typography variant="h6" align="center" gutterBottom>
          Business hours
        </Typography>
      )}
      {placeDetails.items.contentTypeId === 76 && (
        <Typography variant="h6" align="center" gutterBottom>
          Operating hours
        </Typography>
      )}
      <Box>{formatOperatingHours(placeDetails.items.opentime)}</Box>
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
        Contact Number: +82 {placeDetails.items.contactNumber}
      </Typography>
    </Box>
  );
};

export default PlaceDetail;
