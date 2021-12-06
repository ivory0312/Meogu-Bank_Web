import { postSignUp } from "lib/api/auth/auth.api";
import { useCallback } from "react";

const useAuth = () => {
  const requestSignUp = useCallback(async (id: string, password: string) => {
    try {
      const { data } = await postSignUp(id, password);

      return data;
    } catch {}
  }, []);

  return {
    requestSignUp,
  };
};

export default useAuth;
