import { atom } from "recoil";
import { ISignInTypes } from "types/sign.type";

export const isSignInState = atom<boolean>({
  key: "isSignInState",
  default: false,
});

export const signIn: ISignInTypes = {
  id: "",
  password: "",
};

export const signInState = atom<ISignInTypes>({
  key: "signInState",
  default: signIn,
});
