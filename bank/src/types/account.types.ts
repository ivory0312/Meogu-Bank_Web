export interface ICreateAccountTypes {
  name: string;
  password: string;
}

export interface IAccountDataTypes {
  bank: string;
  accountNumber: string;
  price: string;
}

export interface IPasswordDataTypes {
  password: string[];
  checkPassword: string[];
}

export interface IFindAccountTypes {
  name: string;
  residentNumber: string;
}
