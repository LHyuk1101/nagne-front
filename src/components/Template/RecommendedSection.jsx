import { Box, Typography } from "@mui/material";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RecommendedSection = () => {
  const navigate = useNavigate();
  const travelDestinations = [
    { imageUrl: "https://placehold.co/150", title: "남산 공원1" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "N서울타워2" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "남산 공원3" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "N서울타워4" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "남산 공원5" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "N서울타워6" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "남산 공원7" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "N서울타워8" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "남산 공원9" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "N서울타워10" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
  ];

  const restaurants = [
    { imageUrl: "https://placehold.co/150", title: "맛집1" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "맛집2" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "맛집3" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "맛집4" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "맛집5" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "맛집6" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "맛집7" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "맛집8" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "맛집9" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
    { imageUrl: "https://placehold.co/150", title: "맛집10" ,content:"개쩌는 장소", address:"상당한 주소", infocenter:"장난전화 해주세요"},
  ];

  const scrollRefDest = useRef(null);
  const scrollRefRest = useRef(null);

  const handleMouseDown = (e, scrollRef) => {
    scrollRef.current.isDragging = true;
    scrollRef.current.startX = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft;
    scrollRef.current.lastX = scrollRef.current.startX;
    document.addEventListener("mouseup", () => handleMouseUp(scrollRef));
    document.addEventListener("mousemove", (event) => handleMouseMove(event, scrollRef));
  };

  const handleMouseLeave = (scrollRef) => {
    scrollRef.current.isDragging = false;
    cancelAnimationFrame(scrollRef.current.animationFrameId);
    document.removeEventListener("mouseup", () => handleMouseUp(scrollRef));
    document.removeEventListener("mousemove", (event) => handleMouseMove(event, scrollRef));
  };

  const handleMouseUp = (scrollRef) => {
    scrollRef.current.isDragging = false;
    cancelAnimationFrame(scrollRef.current.animationFrameId);
    document.removeEventListener("mouseup", () => handleMouseUp(scrollRef));
    document.removeEventListener("mousemove", (event) => handleMouseMove(event, scrollRef));
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
      scrollRef.current.animationFrameId = requestAnimationFrame(() => applyMomentum(scrollRef));
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = (item) => {
    navigate("/place-detail", { state: item });
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
            sx={{ textAlign: "center", minWidth: "150px", marginRight: index !== travelDestinations.length - 1 ? "1rem" : 0 }}
            onClick={() => handleClick(destination)}
          >
            <img src={destination.imageUrl} alt={destination.title} width="150" height="150" />
            <Typography variant="body1">{destination.title}</Typography>
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
            sx={{ textAlign: "center", minWidth: "150px", marginRight: index !== restaurants.length - 1 ? "1rem" : 0 }}
            onClick={() => handleClick(restaurant)}
          >
            <img src={restaurant.imageUrl} alt={restaurant.title} width="150" height="150" />
            <Typography variant="body1">{restaurant.title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecommendedSection;
