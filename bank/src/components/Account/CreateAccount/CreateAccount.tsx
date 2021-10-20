import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import isEmpty from "util/isEmpty";
import { createAccountState } from "recoil/account";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { ICreateAccountTypes } from "types/account.types";

import "./CreateAccount.scss";

const CreateAccount = () => {
  const [createAccount, setCreateAccount] =
    useRecoilState<ICreateAccountTypes>(createAccountState);
  const [inputs, setInputs] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  });
  const [type, setType] = useState({
    1: "text",
    2: "text",
    3: "text",
    4: "text",
    5: "text",
    6: "text",
    7: "text",
    8: "text",
  });
  const [residentNumberType, setResidentNumberType] =
    useState<string>("password");

  const checkPassword = () => {
    return false;
  };
  const handleResidentNumber = useCallback(() => {
    if (residentNumberType === "password") {
      setResidentNumberType("text");
    } else {
      setResidentNumberType("password");
    }
  }, [residentNumberType]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { id } = e.target;

    if (isEmpty(value)) {
      document.getElementById(String(parseInt(id) - 1))?.focus();
      if (parseInt(id) > 1) {
        setType({
          ...type,
          [String(parseInt(id) - 1)]: "text",
        });
      }
    } else {
      document.getElementById(String(parseInt(id) + 1))?.focus();
      if (parseInt(id) > 1) {
        setType({
          ...type,
          [String(parseInt(id) - 1)]: "password",
        });
      }
    }
    const onlyNumber = value.replace(/[^0-9]/g, "");

    setInputs({
      ...inputs,
      [id]: onlyNumber,
    });
  };
  const handleInput = (e: { target: { value: string; name: string } }) => {
    if (e.target.value === "") {
      return;
    }
    const validation = e.target.value.replace(/[^0-9]/g, "");

    switch (e.target.name) {
      case "firstNumber":
        break;

      default:
        break;
    }
    setCreateAccount({
      ...createAccount,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="createAccount">
        <div className="createAccount-title">계좌 개설</div>
        <div className="createAccount-content">
          <div className="createAccount-content-input">
            이름을 입력해주세요
            <div className="createAccount-content-input-name">
              <input
                name="name"
                type="text"
                onChange={handleInput}
                maxLength={5}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="createAccount-content-input">
            주민등록번호를 입력해주세요
            <div className="createAccount-content-input-residentNumber">
              <input
                type="text"
                name="firstNumber"
                maxLength={6}
                autoComplete="off"
              />
              <span>-</span>
              <input
                type={residentNumberType}
                name="lastNumber"
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
          <div className="createAccount-content-input">
            계좌 별명을 입력해주세요 <span>10글자 이내로 작성해주세요</span>
            <div className="createAccount-content-input-name">
              <input
                name="accountName"
                type="text"
                maxLength={10}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="createAccount-content-input">
            계좌의 비밀번호를 입력해주세요
            <div className="createAccount-content-input-pw">
              <input
                id="1"
                type={type[1]}
                value={inputs[1]}
                maxLength={1}
                onChange={onChange}
                autoComplete="off"
              />
              <input
                id="2"
                type={type[2]}
                value={inputs[2]}
                maxLength={1}
                onChange={onChange}
                autoComplete="off"
              />
              <input
                id="3"
                type={type[3]}
                value={inputs[3]}
                maxLength={1}
                onChange={onChange}
                autoComplete="off"
              />
              <input
                id="4"
                type={type[4]}
                value={inputs[4]}
                maxLength={1}
                onChange={onChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="createAccount-content-input">
            계좌의 비밀번호를 한 번 더 입력해주세요
            <div className="createAccount-content-input-pw">
              <input
                id="5"
                type={type[5]}
                value={inputs[5]}
                maxLength={1}
                onChange={onChange}
                autoComplete="off"
              />
              <input
                id="6"
                type={type[6]}
                value={inputs[6]}
                maxLength={1}
                onChange={onChange}
                autoComplete="off"
              />
              <input
                id="7"
                type={type[7]}
                value={inputs[7]}
                maxLength={1}
                onChange={onChange}
                autoComplete="off"
              />
              <input
                id="8"
                type={type[8]}
                value={inputs[8]}
                maxLength={1}
                onChange={onChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div
            className={
              checkPassword()
                ? "createAccount-content-button"
                : "createAccount-content-button inactive"
            }
          >
            <button>확인</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
