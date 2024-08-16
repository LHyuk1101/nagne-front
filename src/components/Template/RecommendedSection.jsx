import { Box, Typography, Button } from "@mui/material";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPlacesByRegion } from "../../services/template/info";
import defaultImg from "../../assets/images/place/default_img.png";

const RecommendedSection = ({ selectedArea }) => {
  const navigate = useNavigate();
  const scrollRefDest = useRef(null);
  const scrollRefRest = useRef(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["places", selectedArea],
    queryFn: () => fetchPlacesByRegion(selectedArea),
  });

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error || !data || !Array.isArray(data.items)) {
    console.error("Error:", error);
    return <Typography>Error loading data</Typography>;
  }

  // items 배열에 접근하여 처리
  const places = data.items;

  const travelDestinations = places.filter(
    (place) => place.contentTypeId === 76,
  );
  const restaurants = places.filter((place) => place.contentTypeId === 82);

  const handleClick = (item) => {
    navigate(`/place/${item.id}`, { state: item });
  };

  const handleMouseDown = (e, scrollRef) => {
    if (!scrollRef.current) return;
    scrollRef.current.isDragging = true;
    scrollRef.current.startX = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft;
    scrollRef.current.lastX = scrollRef.current.startX;
    document.addEventListener("mouseup", () => handleMouseUp(scrollRef));
    document.addEventListener("mousemove", (event) =>
      handleMouseMove(event, scrollRef),
    );
  };

  const handleMouseLeave = (scrollRef) => {
    if (!scrollRef.current) return;
    scrollRef.current.isDragging = false;
    cancelAnimationFrame(scrollRef.current.animationFrameId);
    document.removeEventListener("mouseup", () => handleMouseUp(scrollRef));
    document.removeEventListener("mousemove", (event) =>
      handleMouseMove(event, scrollRef),
    );
  };

  const handleMouseUp = (scrollRef) => {
    if (!scrollRef.current) return;
    scrollRef.current.isDragging = false;
    cancelAnimationFrame(scrollRef.current.animationFrameId);
    document.removeEventListener("mouseup", () => handleMouseUp(scrollRef));
    document.removeEventListener("mousemove", (event) =>
      handleMouseMove(event, scrollRef),
    );
    applyMomentum(scrollRef);
  };

  const handleMouseMove = (e, scrollRef) => {
    if (!scrollRef.current || !scrollRef.current.isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - scrollRef.current.startX) * 2;
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - walk;
    scrollRef.current.velocity = x - scrollRef.current.lastX;
    scrollRef.current.lastX = x;
  };

  const applyMomentum = (scrollRef) => {
    if (!scrollRef.current) return;
    if (Math.abs(scrollRef.current.velocity) > 1) {
      scrollRef.current.scrollLeft -= scrollRef.current.velocity;
      scrollRef.current.velocity *= 0.95;
      scrollRef.current.animationFrameId = requestAnimationFrame(() =>
        applyMomentum(scrollRef),
      );
    }
  };

  const handleMoreClick = (category) => {
    let tabIndex = 0;
    if (category === "restaurants") {
      tabIndex = 1;
    } else if (category === "travel") {
      tabIndex = 2;
    }

    navigate("/travel/info", { state: { selectedArea, tabIndex } });
  };

  return (
    <Box sx={{ padding: "0.5rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "0.5rem",
          marginTop: "0.4rem", // 텍스트와 사진 사이의 간격 조정
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Recommended travel destination
        </Typography>
        <Button
          variant="text"
          onClick={() => handleMoreClick("travel")}
          style={{ marginBottom: "0.25rem" }}
        >
          More
        </Button>
      </Box>

      <Box
        ref={scrollRefDest}
        onMouseDown={(e) => handleMouseDown(e, scrollRefDest)}
        onMouseLeave={() => handleMouseLeave(scrollRefDest)}
        onMouseUp={() => handleMouseUp(scrollRefDest)}
        sx={{
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          cursor: "grab",
          userSelect: "none",
          scrollBehavior: "smooth", // 부드러운 스크롤
          scrollSnapType: "x mandatory", // 스크롤 스냅 설정
          "&:active": {
            cursor: "grabbing",
          },
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          gap: "0.3rem", // 카드 간의 간격
        }}
      >
        {travelDestinations.map((destination, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              minWidth: "150px", // 카드의 최소 너비 설정
              flexShrink: 0, // 카드가 줄어들지 않도록 설정
              scrollSnapAlign: "center", // 스냅 맞춤 설정
              marginRight: index !== travelDestinations.length - 1 ? "1rem" : 0,
            }}
            onClick={() => handleClick(destination)}
          >
            <img
              src={destination.thumbnailUrl || destination.imgUrl || defaultImg}
              alt={destination.title}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover", // 이미지 크기를 고정하고 비율을 유지하면서 잘라내기
                display: "block",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                wordWrap: "break-word",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
                maxWidth: "150px",
              }}
            >
              {destination.title}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "0.5rem",
          marginBottom: "0.4rem", // 텍스트와 사진 사이의 간격 조정
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Recommended restaurants
        </Typography>
        <Button
          variant="text"
          onClick={() => handleMoreClick("restaurants")}
          style={{ marginBottom: "0.35rem" }}
        >
          More
        </Button>
      </Box>

      <Box
        ref={scrollRefRest}
        onMouseDown={(e) => handleMouseDown(e, scrollRefRest)}
        onMouseLeave={() => handleMouseLeave(scrollRefRest)}
        onMouseUp={() => handleMouseUp(scrollRefRest)}
        sx={{
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          cursor: "grab",
          userSelect: "none",
          scrollBehavior: "smooth", // 부드러운 스크롤
          scrollSnapType: "x mandatory", // 스크롤 스냅 설정
          "&:active": {
            cursor: "grabbing",
          },
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          gap: "0.3rem", // 카드 간의 간격
        }}
      >
        {restaurants.map((restaurant, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              minWidth: "150px", // 카드의 최소 너비 설정
              flexShrink: 0, // 카드가 줄어들지 않도록 설정
              scrollSnapAlign: "center", // 스냅 맞춤 설정
              marginRight: index !== restaurants.length - 1 ? "1rem" : 0,
            }}
            onClick={() => handleClick(restaurant)}
          >
            <img
              src={restaurant.thumbnailUrl || restaurant.imgUrl}
              alt={restaurant.title}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover", // 이미지 크기를 고정하고 비율을 유지하면서 잘라내기
                display: "block",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                wordWrap: "break-word",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
                maxWidth: "150px",
              }}
            >
              {restaurant.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecommendedSection;
