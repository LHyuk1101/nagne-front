import commonStore from "./commonStore";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: {
        userId: "",
        nickname: "",
        email: "",
        role: "",
        userProfileImg: "",
      },
      setUser: (user) => set({ user }),
      clearUser: () =>
        set({
          user: {
            userId: "",
            nickname: "",
            email: "",
            role: "",
            userProfileImg: "",
          },
        }),
    }),
    {
      name: "userStore",
      storage: commonStore,
    },
  ),
);

export default useUserStore;
