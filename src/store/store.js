import { create } from "zustand";

export const useAuthStore = create((set) => ({
  auth: {
    user: "",
    active: false,
  },
  setUser: (email) =>
    set((state) => ({ auth: { ...state.auth, user: email } })),
}));
