import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./Carousel.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Button, Typography } from "@mui/material";
import LINKS from "../../routes/Links";
import { Link, useNavigate } from "react-router-dom";
import { PLAN_HEADER_TITLE } from "../../constants/constant.js";
import usePlanStore from "../../store/PlanContext.js";

import { AREA_COMMONS } from "../../constants/constant.js";

export const Carousel = ({ startDate, endDate }) => {
  const [selectedSlide, setSelectedSlide] = useState(PLAN_HEADER_TITLE);
  const {
    setStartDate,
    setEndDate,
    setPlaceName,
    setLat,
    setLng,
    setAreaCode,
  } = usePlanStore();
  const navigate = useNavigate();

  const handleRedirectPlan = () => {
    const selectedPlace = AREA_COMMONS.find(
      (area) => area.title === selectedSlide,
    );
    setStartDate(startDate);
    setEndDate(endDate);
    setPlaceName(selectedSlide);
    setLat(selectedPlace.lat);
    setLng(selectedPlace.lng);
    setAreaCode(selectedPlace.areaCode);
    navigate(`${LINKS.PLAN_FIRST.link}/${selectedSlide}`);
  };
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "primary.main",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        }}
        marginTop={"1rem"}
        marginBottom={"2rem"}
      >
        Please select a travel destination!
      </Typography>
      <section className="page carousel-1-page">
        <Swiper
          grabCursor
          centeredSlides
          slidesPerView={2}
          effect="coverflow"
          loop
          pagination={{ el: "none" }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          modules={[Pagination, EffectCoverflow]}
          onSlideChange={(swiper) =>
            setSelectedSlide(AREA_COMMONS[swiper.realIndex].title)
          }
        >
          {AREA_COMMONS.map((slide) => (
            <SwiperSlide
              key={slide.title}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "290px 500px", // 이미지 크기 설정
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "290px", // 슬라이드의 너비 설정
                height: "500px", // 슬라이드의 높이 설정
              }}
            >
              <div>
                <div>
                  <h2>{slide.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Link
        to={`${LINKS.PLAN_FIRST.link}/${selectedSlide}`}
        state={{
          startDate,
          endDate,
          selectedPlaceName: selectedSlide,
          lat: AREA_COMMONS.find((slide) => slide.title === selectedSlide)?.lat,
          lng: AREA_COMMONS.find((slide) => slide.title === selectedSlide)?.lng,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{
            marginTop: "0.1rem",
            marginBottom: "0.5rem",
            width: "150px",
            height: "45px",
            fontSize: "18px",
          }}
          onClick={handleRedirectPlan}
        >
          CREATE PLAN!
        </Button>
      </Link>
    </>
  );
};
