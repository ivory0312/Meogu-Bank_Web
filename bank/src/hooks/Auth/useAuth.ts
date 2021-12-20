import {
  postSignUp,
  postSignIn,
  postEasySignUp,
  postEasySignIn,
} from "lib/api/auth/auth.api";
import { useCallback } from "react";
import { getCheck } from "../../lib/api/auth/auth.api";

const useAuth = () => {
  const responseCheck = useCallback(async (id: string) => {
    try {
      const { data } = await getCheck(id);

      return data;
    } catch {
      throw "중복된 아이디입니다";
    }
  }, []);

  const requestSignUp = useCallback(async (body: object) => {
    try {
      const { data } = await postSignUp(body);

      return data;
    } catch {
      throw "회원가입에 실패했습니다";
    }
  }, []);

  const requestSignIn = useCallback(async (body: object) => {
    try {
      const { data } = await postSignIn(body);

      return data;
    } catch (error) {
      throw error;
    }
  }, []);

  const requestEasySignUp = useCallback(async (body: object) => {
    try {
      const { data } = await postEasySignUp(body);

      return data;
    } catch (error) {
      throw error;
    }
  }, []);

  const requestEasySignIn = useCallback(async (body: object) => {
    try {
      const { data } = await postEasySignIn(body);

      return data;
    } catch (error) {
      throw error;
    }
  }, []);

  return {
    responseCheck,
    requestSignUp,
    requestSignIn,
    requestEasySignUp,
    requestEasySignIn,
  };
};

export default useAuth;
