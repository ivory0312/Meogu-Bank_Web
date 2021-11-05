import { useCallback, useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { createAccountState } from "recoil/account";
import { ICreateAccountTypes } from "types/account.types";
import isNumber from "util/isNumber";

import "./ResidentNumber.scss";

const ResidentNumber = () => {
  const [residentNumberType, setResidentNumberType] =
    useState<string>("password");
  const [createAccount, setCreateAccount] =
    useRecoilState<ICreateAccountTypes>(createAccountState);
  const [residentNumber, setResidentNumber] = useState({
    firstNumber: "",
    lastNumber: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "firstNumber") {
      setResidentNumber({
        ...residentNumber,
        firstNumber: isNumber(e.target.value).valueData,
      });
    } else {
      setResidentNumber({
        ...residentNumber,
        lastNumber: isNumber(e.target.value).valueData,
      });
    }
    setCreateAccount({
      ...createAccount,
      residentNumber: `${residentNumber.firstNumber}${residentNumber.lastNumber}`,
    });
  };
  const handleResidentNumber = useCallback(() => {
    if (residentNumberType === "password") {
      setResidentNumberType("text");
    } else {
      setResidentNumberType("password");
    }
  }, [residentNumberType]);

  return (
    <div>
      <div className="createAccount-content-input-residentNumber">
        <input
          type="text"
          id="firstNumber"
          maxLength={6}
          value={residentNumber.firstNumber}
          onChange={handleInput}
          autoComplete="off"
        />
        <span>-</span>
        <input
          type={residentNumberType}
          maxLength={7}
          value={residentNumber.lastNumber}
          onChange={handleInput}
          autoComplete="off"
        />
        <button onClick={() => handleResidentNumber()}>
          {residentNumberType === "password" ? (
            <HiOutlineEye className="icon" />
          ) : (
            <HiOutlineEyeOff className="icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ResidentNumber;
