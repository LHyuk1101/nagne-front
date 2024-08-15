import axiosInstance from "../common/axios";

export const fetchPlacesByRegion = async (areaCode) => {
  try {
    const response = await axiosInstance.get(`/api/place/findall/${areaCode}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching places by region:", error);
    throw error; // 에러 발생 시 이를 상위로 전달하여 React Query에서 처리하게 함
  }
};

export const fetchPlacesBySearch = async (areaCode, keyword) => {
  const response = await axiosInstance.get(`/api/place/search`, {
    params: { areaCode, keyword },
  });
  return response.data;
};
