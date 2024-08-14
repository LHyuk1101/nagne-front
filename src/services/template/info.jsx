import axiosInstance from "../common/axios";

export const fetchPlacesByRegion = async (areaCode) => {
  const response = await axiosInstance.get(`/api/place/find/${areaCode}`);
  return response.data;
};
