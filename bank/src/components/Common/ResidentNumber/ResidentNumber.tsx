import { useCallback, useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

import "./ResidentNumber.scss";

const ResidentNumber = () => {
  const [residentNumberType, setResidentNumberType] =
    useState<string>("password");

  const handleResidentNumber = useCallback(() => {
    if (residentNumberType === "password") {
      setResidentNumberType("text");
    } else {
      setResidentNumberType("password");
    }
  }, [residentNumberType]);
  return (
    <div className="residentNumber">
      <div className="createAccount-content-input-residentNumber">
        <input
          type="text"
          name="firstNumber"
          maxLength={6}
          autoComplete="off"
        />
        <span>-</span>
        <input
          name="lastNumber"
          type={residentNumberType}
          maxLength={7}
          autoComplete="off"
        />
        <button onClick={() => handleResidentNumber()}>
          {residentNumberType === "password" ? (
            <HiOutlineEye />
          ) : (
            <HiOutlineEyeOff />
          )}
        </button>
      </div>
    </div>
  );
};

export default ResidentNumber;
