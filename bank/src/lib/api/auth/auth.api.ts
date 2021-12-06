import CustomAxios from "lib/token/CustomAxios";

export const postSignUp = async (body: object) => {
  const { data } = await CustomAxios.post("/auth/signup", body);

  return data;
};

export const postSignIn = async (body: object) => {
  const { data } = await CustomAxios.post("/auth/signin", body);

  return data;
};

export const postEasySignUp = async (body: object) => {
  const { data } = await CustomAxios.post("/auth/signup/easy", body);

  return data;
};

export const postEasySignIn = async (body: object) => {
  const { data } = await CustomAxios.post("/auth/signin/easy", body);

  return data;
};
