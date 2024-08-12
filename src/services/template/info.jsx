import axiosInstance from "../common/axios";

export const fetchPlacesByRegion = async (region) => {
  const response = await axiosInstance.get(`/api/place/find/${region}`);
  return response.data;
};
