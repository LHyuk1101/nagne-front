import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./Carousel.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../../assets/images/seoul.jpg";
import image2 from "../../assets/images/incheon.jpg";
import image3 from "../../assets/images/daejeon.webp";
import image4 from "../../assets/images/daegu.webp";
import image5 from "../../assets/images/gwangju.jpg";
import image6 from "../../assets/images/busan.jpg";
import image7 from "../../assets/images/ulsan.jpg";
import image8 from "../../assets/images/gyeonggido.jpg";
import image9 from "../../assets/images/gangwondo.jpg";
import image10 from "../../assets/images/chungcheongbukdo.jpg";
import image11 from "../../assets/images/chungcheongnamdo.jpg";
import image12 from "../../assets/images/gyeongsangbukdo.jpg";
import image13 from "../../assets/images/gyeongsangnamdo.jpg";
import image14 from "../../assets/images/jeonlabukdo.jpg";
import image15 from "../../assets/images/jeonlanamdo.jpg";
import image16 from "../../assets/images/jejudo.jpg";

import { Button, Typography } from "@mui/material";
import LINKS from "../../routes/Links";
import { Link, useNavigate } from "react-router-dom";
import { PLAN_HEADER_TITLE } from "../../constants/constant.js";
import { useStartPlan } from "../../store/PlanContext.jsx";

const slides = [
  {
    title: "seoul",
    image: image1,
  },
  {
    title: "incheon",
    image: image2,
  },
  {
    title: "daejeon",
    image: image3,
  },
  {
    title: "daegu",
    image: image4,
  },
  {
    title: "gwangju",
    image: image5,
  },
  {
    title: "busan",
    image: image6,
  },
  {
    title: "ulsan",
    image: image7,
  },
  {
    title: "gyeonggido",
    image: image8,
  },
  {
    title: "gangwondo",
    image: image9,
  },
  {
    title: "chungcheongbukdo",
    image: image10,
  },
  {
    title: "chungcheongnamdo",
    image: image11,
  },
  {
    title: "gyeongsangbukdo",
    image: image12,
  },
  {
    title: "gyeongsangnamdo",
    image: image13,
  },
  {
    title: "jeonlabukdo",
    image: image14,
  },
  {
    title: "jeonlanamdo",
    image: image15,
  },
  {
    title: "jejudo",
    image: image16,
  },
];

export const Carousel = ({ startDate, endDate }) => {
  const [selectedSlide, setSelectedSlide] = useState(PLAN_HEADER_TITLE);
  const { setStartDate, setEndDate, setPlaceName } = useStartPlan();
  const navigate = useNavigate();
  const handleRedirectPlan = () => {
    setStartDate(startDate);
    setEndDate(endDate);
    setPlaceName(selectedSlide);
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
            setSelectedSlide(slides[swiper.realIndex].title)
          }
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.title}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "235px 400px", // 이미지 크기 설정
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "235px", // 슬라이드의 너비 설정
                height: "400px", // 슬라이드의 높이 설정
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
        state={{ startDate, endDate, selectedPlaceName: selectedSlide }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={handleRedirectPlan}
        >
          CREATE PLAN!
        </Button>
      </Link>
    </>
  );
};
