import { atom } from "recoil";
import { ICreateAccountTypes } from "types/account.types";

export const createAccount: ICreateAccountTypes = {
  name: "",
  residentNumber: "",
  accountName: "",
  password: "",
};

export const createAccountState = atom<ICreateAccountTypes>({
  key: "createAccountState",
  default: createAccount,
});

export const activeAccountStat = atom<number>({
  key: "activeAccountStat",
  default: -1,
});
