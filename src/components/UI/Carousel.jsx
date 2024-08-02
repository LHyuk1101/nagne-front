import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

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
import image8 from "../../assets/images/sejong.jpg";
import image9 from "../../assets/images/gyeonggido.jpg";
import image10 from "../../assets/images/gangwondo.jpg";
import image11 from "../../assets/images/chungcheongbukdo.jpg";
import image12 from "../../assets/images/chungcheongnamdo.jpg";
import image13 from "../../assets/images/gyeongsangbukdo.jpg";
import image14 from "../../assets/images/gyeongsangnamdo.jpg";
import image15 from "../../assets/images/jeonlabukdo.jpg";
import image16 from "../../assets/images/jeonlanamdo.jpg";
import image17 from "../../assets/images/jejudo.jpg";

import { Button, Typography } from '@mui/material';

const slides = [
    {
        title: "SEOUL",
        image: image1,
    },
    {
        title: "INCEHON",
        image: image2,
    },
    {
        title: "DAEJEON",
        image: image3,
    },
    {
        title: "DAEGU",
        image: image4,
    },
    {
      title: "GWANGJU",
      image: image5,
  },
  {
    title: "BUSAN",
    image: image6,
  },
  {
    title: "ULSAN",
    image: image7,
  },
  {
    title: "SEJONG",
    image: image8,
  },
  {
    title: "GYEONGGIDO",
    image: image9,
  },
  {
    title: "GANGWONDO",
    image: image10,
  },
  {
    title: "CHUNGCHEONGBUKDO",
    image: image11,
  },
  {
    title: "CHUNGCHEONGNAMDO",
    image: image12,
  },
  {
    title: "GYEONGSANGBUKDO",
    image: image13,
  },
  {
    title: "GYEONGSANGNAMDO",
    image: image14,
  },
  {
    title: "JEONLABUKDO",
    image: image15,
  },
  {
    title: "JEOLLANAMDO",
    image: image16,
  },
  {
    title: "JEJUDO",
    image: image17,
  },
];

export const Carousel = () => {
    return (
      <>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'primary.main',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
          }}
          marginTop={'2rem'}
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
            pagination={{ el: 'none' }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            modules={[Pagination, EffectCoverflow]}
          >
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.title}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: '210px 400px', // 이미지 크기 설정
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  width: '210px', // 슬라이드의 너비 설정
                  height: '400px', // 슬라이드의 높이 설정
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
        <Button   
          variant="contained" 
          color="primary" 
          style={{ marginTop: '1rem' }} 
        >
          CREATE PLAN!
        </Button>
      </>
    );
}; 
