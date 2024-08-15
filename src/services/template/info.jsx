import axiosInstance from "../common/axios";

export const fetchPlacesByRegion = async (areaCode) => {
  const response = await axiosInstance.get(`/api/place/find/${areaCode}`);
  return response.data;
};

// 장소 ID로 상세 정보를 가져오는 API 요청 함수
export const fetchPlaceDetails = async (id) => {
  const response = await axiosInstance.get(`/api/place/details/${id}`);
  return response.data;
};
