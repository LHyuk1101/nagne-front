import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AreaCardComponentforTravelInfo from "./AreaCardforTravelInfo";

const areas = [
  {
    areaCode: 1,
    name: "SEOUL",
    imageUrl: "https://cdn.myro.co.kr/prod/image/city/Seoul.jpg",
  },
  {
    areaCode: 2,
    name: "INCHEON",
    imageUrl: "https://cdn.myro.co.kr/prod/image/city/Incheon.jpg",
  },
  {
    areaCode: 3,
    name: "DAEJEON",
    imageUrl: "https://cdn.myro.co.kr/prod/image/city/Daejeon.jpg",
  },
  {
    areaCode: 4,
    name: "DAEGU",
    imageUrl:
      "https://tour.daegu.go.kr/icms/tour/file/getImage.do?atchFileId=FILE_KOATTR_216%20%20%20%20%20&fileSn=11445",
  },
  {
    areaCode: 31,
    name: "GYEONGGIDO",
    imageUrl:
      "https://media.istockphoto.com/id/516352879/ko/%EC%82%AC%EC%A7%84/%ED%99%94%EC%84%B1.jpg?s=612x612&w=0&k=20&c=dTBaPXUtnsoyJrQEQh-MO7yACd0Jxr8rYICbg4Zt2n0=",
  },
  {
    areaCode: 6,
    name: "BUSAN",
    imageUrl: "https://cdn.myro.co.kr/prod/image/city/Busan.jpg",
  },
  {
    areaCode: 7,
    name: "ULSAN",
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/homigot-4206783_1280.jpg",
  },
  {
    areaCode: 5,
    name: "GWANGJU",
    imageUrl:
      "https://www.donggu.kr/tour/upload/18/20240125095401_19104480.jpg",
  },
  {
    areaCode: 32,
    name: "GANGWONDO",
    imageUrl:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MjdfMjgy%2FMDAxNjg1MTc5MjAyNjg4.27kL66vep3XXy7mqmsbGgqOgFJHbKhNAKv1K909bmnQg.SeJhr_l1KgGj2Lphzh8kZyb-9UyB8uEZb2NrhrekdwIg.PNG.amatialist%2F%25B8%25F1%25C0%25E5.png&type=sc960_832",
  },
  {
    areaCode: 33,
    name: "CHUNGCHEONGBUKDO",
    imageUrl:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMTFfMTE0%2FMDAxNjA1MDkwMjA5NTk3.EV8fb3ZRONUvZm7bRmWq2Wz_7d_fulcz3vfrLND3uXMg.ypCWKkHO4lTtMbfnoCkXEgejVStXP1vqwnDVtExgYsgg.JPEG.eos19205%2F1604813689498.jpg&type=a340",
  },
  {
    areaCode: 34,
    name: "CHUNGCHEONGNAMDO",
    imageUrl:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMTBfMTk3%2FMDAxNjQxODAzNTI0NDgx.ypg4GDRX8BWMHqYKIS8if9C3qC2XE3Xvi16di_bIHNwg.-rz0bvQWVguDNTLfJ78e1jpyS8p4Ko5L2nlw7z8MMY4g.JPEG.wolfcha99%2F%25BA%25CE%25BF%25A9%25B1%25C3%25B3%25B2%25C1%25F6_28.jpg&type=a340",
  },
  {
    areaCode: 35,
    name: "GYEONGSANGBUKDO",
    imageUrl:
      "https://search.pstatic.net/common?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMjExMDFfMjY4%2FMDAxNjY3MzEyODcwODkz.JRQ8yLsvlZKoOz484srEKvuXCZgOeqRubmP-jNhBf2gg.5qbGNP1qk8Q238zqTM-0OAqyLDwJPpazlQeKqXRa1u0g.JPEG.suntill0210%2FDHK_9038-HDR.jpg%3Ftype%3Dw800&type=f1040_576_domesearch",
  },
  {
    areaCode: 36,
    name: "GYEONGSANGNAMDO",
    imageUrl:
      "https://search.pstatic.net/common?src=http%3A%2F%2Fblogfiles.naver.net%2F%2FMjAyMTA0MjhfMjgy%2FMDAxNjE5NTk1Njk4MTQw.A3AIv7a5mkwqjn9VrwM-SooyORUCJpWSZujqM3QKT5Yg.PWxajBH1WkqSUtkwQWtuOeiv0FanS1i7ttafFMaq0Nsg.JPEG.gnfeel%2F5.JPG%2F900x600&type=f1040_576_domesearch",
  },
  {
    areaCode: 37,
    name: "JEONLABUKDO",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/02/27/13/57/traditional-village-7818476_1280.jpg",
  },
  {
    areaCode: 38,
    name: "JEONLANAMDO",
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/28/d1/c8/6a/plum-blossom-festival.jpg",
  },
  {
    areaCode: 39,
    name: "JEJUDO",
    imageUrl: "https://cdn.myro.co.kr/prod/image/city/Jeju.jpg",
  },
];

const AreaScrollforTravelInfo = ({ onAreaClick }) => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const animationFrameId = useRef(null);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    lastX.current = startX.current;
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    cancelAnimationFrame(animationFrameId.current);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    cancelAnimationFrame(animationFrameId.current);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
    applyMomentum();
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
    velocity.current = x - lastX.current;
    lastX.current = x;
  };

  const applyMomentum = () => {
    if (Math.abs(velocity.current) > 1) {
      scrollRef.current.scrollLeft -= velocity.current;
      velocity.current *= 0.95;
      animationFrameId.current = requestAnimationFrame(applyMomentum);
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
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
      }}
    >
      {areas.map((area, index) => (
        <Box
          key={index}
          sx={{
            display: "inline-block",
            px: 0.5,
            cursor: "pointer",
          }}
          onClick={() => onAreaClick(area.name)} // 클릭된 지역의 name을 전달
        >
          <AreaCardComponentforTravelInfo
            imageUrl={area.imageUrl}
            title={area.name}
          />
          <Box mt={1}>
            <Typography
              variant="body2"
              align="center"
              sx={{ userSelect: "none" }}
            >
              {area.name}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AreaScrollforTravelInfo;
