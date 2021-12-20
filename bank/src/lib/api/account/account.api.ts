import CustomAxios from "lib/token/CustomAxios";

export const getAccounts = async () => {
  const { data } = await CustomAxios.get("/account/find/token");

  return data;
};

export const postMakeAccount = async (body: object) => {
  const { data } = await CustomAxios.post("/account", body);

  return data;
};
