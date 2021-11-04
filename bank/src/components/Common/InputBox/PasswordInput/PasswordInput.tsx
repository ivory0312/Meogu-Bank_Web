import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { passwordDataStat } from "recoil/account";
import isEmpty from "util/isEmpty";

import "./PasswordInput.scss";

const PasswordInput = (props: { isCheck: boolean }) => {
  const [inputs, setInputs] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
  });
  const [checkInput, setCheckInput] = useState({
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
  });
  const [checkType, setCheckType] = useState({
    5: "text",
    6: "text",
    7: "text",
    8: "text",
  });

  const [passwordData, setPasswordData] = useRecoilState(passwordDataStat);

  const password: any[] = [];
  const checkPassword: any[] = [];

  useEffect(() => {
    Object.entries(props.isCheck ? checkInput : inputs).map(([key, value]) =>
      props.isCheck ? checkPassword.push(value) : password.push(value)
    );
    if (props.isCheck) {
      setPasswordData({ ...passwordData, checkPassword: checkPassword });
    } else {
      setPasswordData({ ...passwordData, password: password });
    }
  }, [inputs, checkInput]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { id } = e.target;

    if (isEmpty(value)) {
      document.getElementById(String(parseInt(id) - 1))?.focus();
      if (parseInt(id) > 1) {
        if (props.isCheck) {
          setCheckType({
            ...checkType,
            [String(parseInt(id) - 1)]: "text",
          });
        } else {
          setType({
            ...type,
            [String(parseInt(id) - 1)]: "text",
          });
        }
      }
    } else {
      document.getElementById(String(parseInt(id) + 1))?.focus();
      if (parseInt(id) > 1) {
        if (props.isCheck) {
          setCheckType({
            ...checkType,
            [String(parseInt(id) - 1)]: "password",
          });
        }
        setType({
          ...type,
          [String(parseInt(id) - 1)]: "password",
        });
      }
    }
    const onlyNumber = value.replace(/[^0-9]/g, "");

    if (props.isCheck) {
      setCheckInput({
        ...checkInput,
        [id]: onlyNumber,
      });
    } else {
      setInputs({
        ...inputs,
        [id]: onlyNumber,
      });
    }
  };
  return (
    <div className="passwordInput">
      <input
        id={props.isCheck ? "5" : "1"}
        type={props.isCheck ? checkType[5] : type[1]}
        value={props.isCheck ? checkInput[5] : inputs[1]}
        maxLength={1}
        onChange={handleInput}
        autoComplete="off"
      />
      <input
        id={props.isCheck ? "6" : "2"}
        type={props.isCheck ? checkType[6] : type[2]}
        value={props.isCheck ? checkInput[6] : inputs[2]}
        maxLength={1}
        onChange={handleInput}
        autoComplete="off"
      />
      <input
        id={props.isCheck ? "7" : "3"}
        type={props.isCheck ? checkType[7] : type[3]}
        value={props.isCheck ? checkInput[7] : inputs[3]}
        maxLength={1}
        onChange={handleInput}
        autoComplete="off"
      />
      <input
        id={props.isCheck ? "8" : "4"}
        type={props.isCheck ? checkType[8] : type[4]}
        value={props.isCheck ? checkInput[8] : inputs[4]}
        maxLength={1}
        onChange={handleInput}
        autoComplete="off"
      />
    </div>
  );
};

export default PasswordInput;
