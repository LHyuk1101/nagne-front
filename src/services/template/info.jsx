import axiosInstance from "../common/axios";

export const findAll = async () => {
  const response = await axiosInstance.get("/api/place/findall");
  return response.data;
};
