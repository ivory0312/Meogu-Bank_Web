import CustomAxios from "lib/token/CustomAxios";

export const getCheck = async (id: string) => {
  const { data } = await CustomAxios.get(`/auth/signup/check?id=${id}`);

  return data;
};

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
