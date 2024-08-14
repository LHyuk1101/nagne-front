import axiosInstance from "../common/axios";

export const createPlan = async (planData) => {
  try {
    console.log("Sending plan data to server:", planData);
    const response = await axiosInstance.post("/api/llm/create-plan", planData);
    console.log("Received response from server:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating plan:", error);
    if (error.response) {
      console.error("Error response:", error.response.data);
      console.error("Error status:", error.response.status);
    }
    throw error;
  }
};
