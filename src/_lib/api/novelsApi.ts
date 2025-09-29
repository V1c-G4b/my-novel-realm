import { AxiosRequestConfig } from "axios";
import api from "./axiosInstance";

export interface Root {
  success: boolean;
  novels: Novel[];
}

export interface Novel {
  id: string;
  title: string;
  description: string;
  authorId: string;
  genres: string[];
  coverImageBase64: string;
  createdAt: string;
  updatedAt: string;
}

export const getNovels = async (config?: AxiosRequestConfig): Promise<Root> => {
  const response = await api.get("/novels", config);
  return response.data;
};

export const searchNovels = async (
  query: string,
  config?: AxiosRequestConfig
): Promise<Root> => {
  const response = await api.get(`/novels/search?q=${query}`, config);
  return response.data;
};

export const addChapter = async (novelId: string, chapterData: any) => {
  const response = await api.post(`/novels/${novelId}/chapters`, chapterData);
  return response.data;
};
