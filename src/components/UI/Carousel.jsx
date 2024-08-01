import {Swiper, SwiperSlide} from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import "./Carousel.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../../assets/images/gaechoo.jpeg";
import image2 from "../../assets/images/more.jpeg";
import image3 from "../../assets/images/whyrun.jpeg";
import image4 from "../../assets/images/whynotrun.jpeg";
import image5 from "../../assets/images/correct.jpeg";
import image6 from "../../assets/images/zustand.gif";
import image7 from "../../assets/images/sotong.png";

import { Button, Typography } from '@mui/material';
const slides = [
    {
        title: "개추",
        image: image1,
        content: "일단 나부터ㅋㅋ"
    },
    {
        title: "다시한번",
        image: image2,
        content: "해보시겠어요?"
    },
    {
        title: "왜되지?",
        image: image3,
        content: "이게 왜 돌아가지?"
    },
    {
        title: "왜안되지?",
        image: image4,
        content: "이게 왜 안돌아가지?"
    },
    {
      title: "딩동댕!",
      image: image5,
      content: "정답!"
  },
  {
    title: "이 밈을 안다면",
    image: image6,
    content: "위기입니다"
},
{
  title: "안녕하세요",
  image: image7,
  content: "소통해요"
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
          pagination={{ clickable: true }}
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
              }}
            >
              <div>
                <div>
                  <h2>{slide.title}</h2>
                  <h3>{slide.content}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Button   
        variant="contained" 
        color="primary" 
        style={{ marginTop: '1rem' }} >
        CREATE PLAN!</Button>
      </>
    );
  };