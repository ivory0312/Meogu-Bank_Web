import {
  postSignUp,
  postSignIn,
  postEasySignUp,
  postEasySignIn,
} from "lib/api/auth/auth.api";
import { useCallback } from "react";

const useAuth = () => {
  const requestSignUp = useCallback(async (body: object) => {
    try {
      const { data } = await postSignUp(body);

      return data;
    } catch {}
  }, []);

  const requestSignIn = useCallback(async (body: object) => {
    try {
      const { data } = await postSignIn(body);

      return data;
    } catch {}
  }, []);

  const requestEasySignUp = useCallback(async (body: object) => {
    try {
      const { data } = await postEasySignUp(body);

      return data;
    } catch {}
  }, []);

  const requestEasySignIn = useCallback(async (body: object) => {
    try {
      const { data } = await postEasySignIn(body);

      return data;
    } catch {}
  }, []);

  return {
    requestSignUp,
    requestSignIn,
    requestEasySignUp,
    requestEasySignIn,
  };
};

export default useAuth;
