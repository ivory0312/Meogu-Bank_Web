import "./CreateAccount.scss";
import { useState } from "react";

const CreateAccount = () => {
  const [inputs, setInputs] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
  });

  // const hi = (cur: number) => {
  //   const input = document.getElementById(String(cur + 1));

  //   input?.focus();
  // };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { id } = e.target;

    if (value === "") {
      document.getElementById(String(parseInt(id) - 1))?.focus();
      console.log(id);
    } else {
      document.getElementById(String(parseInt(id) + 1))?.focus();
      console.log(id);
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
                type="text"
                value={inputs[1]}
                maxLength={1}
                onChange={onChange}
              />
              <input
                id="2"
                type="text"
                value={inputs[2]}
                maxLength={1}
                onChange={onChange}
              />
              <input
                id="3"
                type="text"
                value={inputs[3]}
                maxLength={1}
                onChange={onChange}
              />
              <input
                id="4"
                type="text"
                value={inputs[4]}
                maxLength={1}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="createAccount-content-input">
            계좌의 비밀번호를 한 번 더 입력해주세요
            <div className="createAccount-content-input-pw">
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
