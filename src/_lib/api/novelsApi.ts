import api from "./axiosInstance";

export interface Root {
  success: boolean
  novels: Novel[]
}

export interface Novel {
  id: string
  title: string
  description: string
  authorId: string
  genres: string[]
  coverImagePath: string
  createdAt: string
  updatedAt: string
}


export const getNovels = async () : Promise<Root> => {
  const response = await api.get("/novels");
  return response.data;
};

export const addChapter = async (novelId: string, chapterData: any) => {
  const response = await api.post(`/novels/${novelId}/chapters`, chapterData);
  return response.data;
};

