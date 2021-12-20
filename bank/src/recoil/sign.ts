import { atom } from "recoil";
import { ISignUpType } from "types/sign.type";

export const isSignInState = atom<boolean>({
  key: "isSignInState",
  default: false,
});

export const signUp = {
  id: "",
  password: "",
  name: "",
  nickname: "",
  phone: "",
  birth: "",
  profileImage: "",
};
export const signUpState = atom<ISignUpType>({
  key: "signUpState",
  default: signUp,
});

export const tokenState = atom<string>({
  key: "tokenState",
  default: "",
});
