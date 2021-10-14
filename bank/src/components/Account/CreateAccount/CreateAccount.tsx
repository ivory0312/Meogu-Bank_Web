import "./CreateAccount.scss";
import { useState } from "react";
import isEmpty from "util/isEmpty";

const CreateAccount = () => {
  const [inputs, setInputs] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
  });
  const [type, setType] = useState({
    1: "text",
    2: "text",
    3: "text",
    4: "text",
  });

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

  return (
    <>
      <div className="createAccount">
        <div className="createAccount-title">계좌 개설</div>
        <div className="createAccount-content">
          <div className="createAccount-content-input">
            계좌 이름을 입력해주세요 <span>10글자 이내로 작성해주세요</span>
            <div className="createAccount-content-input-name">
              <input type="text" maxLength={10} />
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
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
