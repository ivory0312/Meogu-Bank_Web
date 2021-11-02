import { useState } from "react";
import isEmpty from "util/isEmpty";
import useAccount from "hooks/Account/useAccount";
import ResidentNumber from "components/Common/ResidentNumber";
import useHandleHistory from "hooks/History/useHandleHistory";
import arrow from "assets/arrow.svg";

import "./CreateAccount.scss";

const CreateAccount = () => {
  const { checkPassword } = useAccount();
  const { handleHistory } = useHandleHistory();

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

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  const handleButton = () => {
    handleHistory("/");
  };

  return (
    <>
      <div className="createAccount">
        <span className="createAccount-home" onClick={() => handleHistory("/")}>
          <img src={arrow} alt="arrow" />
          <span>메인 화면으로</span>
        </span>
        <div className="createAccount-content">
          <div className="createAccount-content-title">계좌 개설</div>
          <div className="createAccount-content-input">
            이름을 입력해주세요
            <div className="createAccount-content-input-name">
              <input name="name" type="text" maxLength={5} autoComplete="off" />
            </div>
          </div>
          <div className="createAccount-content-input">
            주민등록번호를 입력해주세요
            <ResidentNumber />
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
                onChange={handleInput}
                autoComplete="off"
              />
              <input
                id="2"
                type={type[2]}
                value={inputs[2]}
                maxLength={1}
                onChange={handleInput}
                autoComplete="off"
              />
              <input
                id="3"
                type={type[3]}
                value={inputs[3]}
                maxLength={1}
                onChange={handleInput}
                autoComplete="off"
              />
              <input
                id="4"
                type={type[4]}
                value={inputs[4]}
                maxLength={1}
                onChange={handleInput}
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
                onChange={handleInput}
                autoComplete="off"
              />
              <input
                id="6"
                type={type[6]}
                value={inputs[6]}
                maxLength={1}
                onChange={handleInput}
                autoComplete="off"
              />
              <input
                id="7"
                type={type[7]}
                value={inputs[7]}
                maxLength={1}
                onChange={handleInput}
                autoComplete="off"
              />
              <input
                id="8"
                type={type[8]}
                value={inputs[8]}
                maxLength={1}
                onChange={handleInput}
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
            <button onClick={handleButton}>확인</button>
          </div>
        </div>
      </div>
      <div
        className="findAccountText"
        onClick={() => handleHistory("/add-account")}
      >
        이미 계좌가 있으신가요?
        <span> 계좌 찾기</span>
      </div>
    </>
  );
};

export default CreateAccount;
