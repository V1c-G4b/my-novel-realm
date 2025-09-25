import api from "./axiosInstance";

export interface Login {
  redirect: boolean;
  token: string;
  user: User;
}

export interface User {
  id: string;
  email: string;
  name: string;
  image: any;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Register {
  token: string;
  user: User;
}

export interface User {
  id: string;
  email: string;
  name: string;
  image: any;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export const login = async (
  email: string,
  password: string
): Promise<Login> => {
  const response = await api.post("/auth/sign-in/email", { email, password });
  return response.data;
};

export const signUp = async (
  email: string,
  password: string,
  name: string
): Promise<Register> => {
  const response = await api.post("/auth/sign-up", { email, password, name });
  return response.data;
};

export const getMe = async (): Promise<User> => {
  const response = await api.get("users/me");
  return response.data;
};
