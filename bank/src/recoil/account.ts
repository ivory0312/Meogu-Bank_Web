import { atom } from "recoil";
import {
  IAccountDataTypes,
  ICreateAccountTypes,
  IFindAccountTypes,
  IPasswordDataTypes,
} from "types/account.types";

export const createAccount: ICreateAccountTypes = {
  name: "",
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

export const passwordData: IPasswordDataTypes = {
  password: [],
  checkPassword: [],
};

export const passwordDataStat = atom<IPasswordDataTypes>({
  key: "passwordDataState",
  default: passwordData,
});

export const findAccount: IFindAccountTypes = {
  name: "",
  residentNumber: "",
};

export const findAccountState = atom<IFindAccountTypes>({
  key: "findAccountState",
  default: findAccount,
});
