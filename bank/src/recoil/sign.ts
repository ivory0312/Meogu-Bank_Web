import { atom } from "recoil";

export const isSignInState = atom<boolean>({
  key: "isSignInState",
  default: false,
});
