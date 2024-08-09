import commonStore from './commonStore';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: {
        userId: "",
        name: "",
        email: "",
        role: "",
        profileImg: "",
      },
      setUser: (user) => set({ user }),
      clearUser: () =>
        set({
          user: {
            userId: "",
            name: "",
            email: "",
            role: "",
            profileImg: "",
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
