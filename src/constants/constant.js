/**
 * 파일 설명: 이 파일은 프로젝트 전역에서 사용할 상수를 정의합니다.
 *
 * 작성자: ruu
 * 작성일: 2024-07-30
 */

import image1 from "../assets/images/place/seoul.jpg";
import image2 from "../assets/images/place/incheon.jpg";
import image3 from "../assets/images/place/daejeon.webp";
import image4 from "../assets/images/place/daegu.webp";
import image5 from "../assets/images/place/gwangju.jpg";
import image6 from "../assets/images/place/busan.jpg";
import image7 from "../assets/images/place/ulsan.jpg";
import image8 from "../assets/images/place/gyeonggido.jpg";
import image9 from "../assets/images/place/gangwondo.jpg";
import image10 from "../assets/images/place/chungcheongbukdo.jpg";
import image11 from "../assets/images/place/chungcheongnamdo.jpg";
import image12 from "../assets/images/place/gyeongsangbukdo.jpg";
import image13 from "../assets/images/place/gyeongsangnamdo.jpg";
import image14 from "../assets/images/place/jeonlabukdo.jpg";
import image15 from "../assets/images/place/jeonlanamdo.jpg";
import image16 from "../assets/images/place/jejudo.jpg";

/**
 * Css 관련 상수 모음
 */
export const WINDOW_MD_WIDTH_SIZE = 768;

export const SEOUL_CODE = 1;

/**
 * Plan Header가 없다면.
 */
export const PLAN_HEADER_TITLE = "UNKNOWN DESTINATION";

/**
 * Request관련 상수
 */
export const RESPONSE_STATUS_SUCCESS = "SUCCESS";
export const RESPONSE_STATUS_ERROR = "ERROR";

/**
 * 아이콘 컬러
 */
export const IconColor = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#7986CB",
  "#F06292",
  "#AED581",
];

export const AREA_COMMONS = [
  {
    title: "seoul",
    areaCode: 1,
    image: image1,
    lat: "37.5665",
    lng: "126.9780",
  },
  {
    title: "incheon",
    areaCode: 2,
    image: image2,
    lat: "37.4563",
    lng: "126.7052",
  },
  {
    title: "daejeon",
    areaCode: 3,
    image: image3,
    lat: "36.3504",
    lng: "127.3845",
  },
  {
    title: "daegu",
    areaCode: 4,
    image: image4,
    lat: "35.8722",
    lng: "128.6018",
  },
  {
    title: "gwangju",
    areaCode: 5,
    image: image5,
    lat: "35.1595",
    lng: "126.8526",
  },
  {
    title: "busan",
    areaCode: 6,
    image: image6,
    lat: "35.1796",
    lng: "129.0756",
  },
  {
    title: "ulsan",
    areaCode: 7,
    image: image7,
    lat: "35.5384",
    lng: "129.3114",
  },
  {
    title: "gyeonggido",
    areaCode: 31,
    image: image8,
    lat: "37.4138",
    lng: "127.5183",
  },
  {
    title: "gangwondo",
    areaCode: 32,
    image: image9,
    lat: "37.8228",
    lng: "128.1555",
  },
  {
    title: "chungcheongbukdo",
    image: image10,
    areaCode: 33,
    lat: "36.6357",
    lng: "127.4917",
  },
  {
    title: "chungcheongnamdo",
    areaCode: 34,
    image: image11,
    lat: "36.5184",
    lng: "126.8000",
  },
  {
    title: "gyeongsangbukdo",
    areaCode: 35,
    image: image12,
    lat: "36.4919",
    lng: "128.8889",
  },
  {
    title: "gyeongsangnamdo",
    areaCode: 36,
    image: image13,
    lat: "35.4606",
    lng: "128.2132",
  },
  {
    title: "jeonlabukdo",
    areaCode: 37,
    image: image14,
    lat: "35.7175",
    lng: "127.1530",
  },
  {
    title: "jeonlanamdo",
    areaCode: 38,
    image: image15,
    lat: "34.8161",
    lng: "126.4629",
  },
  {
    title: "jejudo",
    areaCode: 39,
    image: image16,
    lat: "33.4996",
    lng: "126.5312",
  },
];
