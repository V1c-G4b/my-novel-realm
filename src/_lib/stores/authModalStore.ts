import { create } from "zustand";

type Mode = "login" | "register";
type User = { id: string; email: string; name: string } | null;

interface AuthState {
  isOpen: boolean;
  mode: Mode;
  isAuthenticated: boolean;
  user: User;
  openModal: (mode: Mode) => void;
  closeModal: () => void;
  toggleMode: () => void;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isOpen: false,
  mode: "login",
  isAuthenticated: false,
  user: null,
  openModal: (mode) => set({ isOpen: true, mode }),
  closeModal: () => set({ isOpen: false }),
  toggleMode: () =>
    set((state) => ({ mode: state.mode === "login" ? "register" : "login" })),
  setUser: (user) => set({ isAuthenticated: !!user, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
