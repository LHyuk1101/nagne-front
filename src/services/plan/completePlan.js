import axiosInstance from "../common/axios";

export const createPlan = async (planData) => {
  try {
    const response = await axiosInstance.post("/api/llm/create-plan", planData);
    return response.data;
  } catch (error) {
    console.error("Error creating plan:", error);
    throw error;
  }
};
