import { Box, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const PlaceDetail = () => {
  const location = useLocation();
  const { imageUrl, title, imgUrl, address, contactNumber, overview, likes } =
    location.state;

  // 좋아요 상태를 관리하는 state
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes || 0);

  const handleLikeToggle = () => {
    // 하트 클릭 시 좋아요 상태 토글 및 좋아요 개수 업데이트
    setIsLiked((prevIsLiked) => !prevIsLiked);
    setLikeCount((prevLikeCount) =>
      isLiked ? prevLikeCount - 1 : prevLikeCount + 1,
    );
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={imgUrl}
        alt={title}
        sx={{
          width: "100%",
          maxWidth: "600px", // 반응형을 위한 최대 너비 설정
          height: "auto",
          borderRadius: "8px",
        }}
      />
      {/* 좋아요 버튼과 좋아요 개수 */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // 좌측 정렬
          mt: 0.5,
          width: "100%",
          maxWidth: "600px", // 반응형을 위한 최대 너비 설정
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
      <Typography variant="body1" align="center" gutterBottom>
        {overview}
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
