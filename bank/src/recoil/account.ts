import { atom } from "recoil";
import { IAccountDataTypes, ICreateAccountTypes } from "types/account.types";

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
  default: 0,
});

export const accountData = {
  bank: "",
  accountNumber: "",
  price: "",
};
export const accountDataState = atom<IAccountDataTypes>({
  key: "accountDataState",
  default: accountData,
});
