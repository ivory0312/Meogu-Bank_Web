import CustomAxios from "lib/token/CustomAxios";

export const postSignUp = async (id: string, password: string) => {
  const body = {
    id: id,
    password: password,
  };
  const { data } = await CustomAxios.post("/auth/signup", body);

  return data;
};
