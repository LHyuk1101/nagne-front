import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPlacesByRegion } from "../../services/template/info";

const RecommendedSection = ({ selectedArea }) => {
  const navigate = useNavigate();
  const scrollRefDest = useRef(null);
  const scrollRefRest = useRef(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["places", selectedArea],
    queryFn: () => fetchPlacesByRegion(selectedArea),
  });

  console.log("가져온 데이터 : ", data);

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
    navigate("/place", { state: item });
  };

  const handleMouseDown = (e, scrollRef) => {
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
    scrollRef.current.isDragging = false;
    cancelAnimationFrame(scrollRef.current.animationFrameId);
    document.removeEventListener("mouseup", () => handleMouseUp(scrollRef));
    document.removeEventListener("mousemove", (event) =>
      handleMouseMove(event, scrollRef),
    );
  };

  const handleMouseUp = (scrollRef) => {
    scrollRef.current.isDragging = false;
    cancelAnimationFrame(scrollRef.current.animationFrameId);
    document.removeEventListener("mouseup", () => handleMouseUp(scrollRef));
    document.removeEventListener("mousemove", (event) =>
      handleMouseMove(event, scrollRef),
    );
    applyMomentum(scrollRef);
  };

  const handleMouseMove = (e, scrollRef) => {
    if (!scrollRef.current.isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - scrollRef.current.startX) * 2;
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - walk;
    scrollRef.current.velocity = x - scrollRef.current.lastX;
    scrollRef.current.lastX = x;
  };

  const applyMomentum = (scrollRef) => {
    if (Math.abs(scrollRef.current.velocity) > 1) {
      scrollRef.current.scrollLeft -= scrollRef.current.velocity;
      scrollRef.current.velocity *= 0.95;
      scrollRef.current.animationFrameId = requestAnimationFrame(() =>
        applyMomentum(scrollRef),
      );
    }
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h6" align="center" gutterBottom>
        Recommended travel destination
      </Typography>
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
          "&:active": {
            cursor: "grabbing",
          },
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          gap: "1rem",
        }}
      >
        {travelDestinations.map((destination, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              minWidth: "150px",
              marginRight: index !== travelDestinations.length - 1 ? "1rem" : 0,
            }}
            onClick={() => handleClick(destination)}
          >
            <img
              src={destination.thumbnailUrl}
              alt={destination.title}
              width="150"
              height="150"
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

      <Typography variant="h6" align="center" gutterBottom>
        Recommended restaurants
      </Typography>
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
          "&:active": {
            cursor: "grabbing",
          },
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          gap: "1rem",
        }}
      >
        {restaurants.map((restaurant, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              minWidth: "150px",
              marginRight: index !== restaurants.length - 1 ? "1rem" : 0,
            }}
            onClick={() => handleClick(restaurant)}
          >
            <img
              src={restaurant.thumbnailUrl}
              alt={restaurant.title}
              width="150"
              height="150"
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
