import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import defaultImg from "../../assets/images/place/default_img.png";

const PlaceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, title, imgUrl, address, contactNumber, overview, likes } =
    location.state;

  // 로컬 스토리지 키 생성
  const localStorageKey = `place-${id}-liked`;

  // 좋아요 상태를 로컬 스토리지에서 가져오기
  const initialIsLiked = localStorage.getItem(localStorageKey) === "true";
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likeCount, setLikeCount] = useState(likes + (initialIsLiked ? 1 : 0));

  const handleLikeToggle = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    setLikeCount(likeCount + (newIsLiked ? 1 : -1));

    // 로컬 스토리지에 좋아요 상태 저장 또는 삭제
    if (newIsLiked) {
      localStorage.setItem(localStorageKey, "true");
    } else {
      localStorage.removeItem(localStorageKey);
    }
  };

  const handleBackBtn = () => {
    navigate(-1);
  };

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
        src={imgUrl || defaultImg}
        alt={title}
        sx={{
          width: "100%",
          maxWidth: "600px",
          height: "300px",
          borderRadius: "8px",
        }}
      />
      {/* 좋아요 버튼 */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // 좌측 정렬
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
        {title}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        gutterBottom
        dangerouslySetInnerHTML={{ __html: overview }}
      />
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "grey.300",
          my: 2,
          marginTop: "2rem",
          marginBottom: "2rem",
          width: "100%",
          maxWidth: "600px",
        }}
      />
      <Typography variant="body2" align="center" gutterBottom>
        주소: {address}
      </Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "grey.300",
          my: 2,
          marginTop: "2rem",
          marginBottom: "2rem",
          width: "100%",
          maxWidth: "600px",
        }}
      />
      <Typography variant="body2" align="center" gutterBottom>
        전화번호: {contactNumber}
      </Typography>
    </Box>
  );
};

export default PlaceDetail;
