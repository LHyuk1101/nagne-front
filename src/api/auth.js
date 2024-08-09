import { axiosInstance, setAccessTokenToHttpClient} from "../axios";

export const login = async (credentials) => {
  const response = await axiosInstance.post("/auth/login", credentials);
  return response.data;
};

export const logout = async () => {
  await axiosInstance.post("/auth/logout");
  console.log("Logout success!");
};

export const refreshAccessToken = async () => {
  const response = await axiosInstance.post("/auth/refresh");
  const { accessToken } = response.data;
  setAccessTokenToHttpClient(accessToken);
  return response;
};