import { useEffect } from "react";
import { getMe } from "../api/authApi";
import { useAuthStore } from "../stores/authModalStore";

export const useAuth = () => {
  const { user, isAuthenticated, setUser } = useAuthStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await getMe();
        setUser(data);
      } catch (error) {
        setUser(null);
      }
    };
    if (!user) checkAuth();
  }, []);

  return { user, isAuthenticated };
};
