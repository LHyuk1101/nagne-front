import useUserStore from "./../../store/useUserStore";
import { axiosInstance } from "../common/axios";

export const login = async (credentials) => {
  const response = await axiosInstance.post("/api/auth/login", credentials);
  return response.data;
};

export const logout = async () => {
  await axiosInstance.post("/api/auth/logout");
  console.log("Logout success!");
};

export const refreshAccessToken = async () => {
  const response = await axiosInstance.post("/api/auth/refresh");
  const { accessToken } = response.data;
  axiosInstance.defaults.headers.common["Authorization"] =
    `Bearer ${accessToken}`;
  return response;
};

export const handleLogout = async () => {
  try {
    logout();
    console.log(document.cookie);
  } catch (error) {
    console.error("API 서버에 logout 요청이 실패 했습니다.");
  }
  localStorage.removeItem("userStore");
  localStorage.removeItem("accessToken");
  useUserStore.getState().setUser("");
  window.location.href = "/";
};
