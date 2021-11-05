import useAccount from "hooks/Account/useAccount";
import ResidentNumber from "components/Common/ResidentNumber";
import useHandleHistory from "hooks/History/useHandleHistory";
import arrow from "assets/arrow.svg";
import PasswordInput from "components/Common/InputBox/PasswordInput/PasswordInput";
import isEmpty from "util/isEmpty";
import { useRecoilState, useRecoilValue } from "recoil";
import { createAccountState, passwordDataStat } from "recoil/account";

import "./CreateAccount.scss";

const CreateAccount = () => {
  const [createAccount, setCreateAccount] = useRecoilState(createAccountState);
  const passwordData = useRecoilValue(passwordDataStat);
  const { checkCreatePassword } = useAccount();
  const { handleHistory } = useHandleHistory();
  const isValueEmpty: boolean = isEmpty(
    createAccount.name &&
      createAccount.residentNumber &&
      createAccount.accountName &&
      createAccount.password
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateAccount({
      ...createAccount,
      [e.target.id]: e.target.value,
    });
  };
  const handleButton = () => {
    if (
      !isValueEmpty &&
      checkCreatePassword(passwordData.password, passwordData.checkPassword)
    ) {
      handleHistory("/");
      setCreateAccount({
        name: "",
        residentNumber: "",
        accountName: "",
        password: "",
      });
      console.log("if", createAccount);
    } else {
      console.log("else");
    }
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
              <input
                id="name"
                value={createAccount.name}
                type="text"
                maxLength={5}
                onChange={handleInput}
                autoComplete="off"
              />
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
                id="accountName"
                value={createAccount.accountName}
                type="text"
                maxLength={10}
                onChange={handleInput}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="createAccount-content-input">
            계좌의 비밀번호를 입력해주세요
            <PasswordInput isCheck={false} />
          </div>
          <div className="createAccount-content-input">
            계좌의 비밀번호를 한 번 더 입력해주세요
            <PasswordInput isCheck={true} />
          </div>
          <div
            className={
              checkCreatePassword(
                passwordData.password,
                passwordData.checkPassword
              )
                ? "createAccount-content-button"
                : "createAccount-content-button inactive"
            }
          >
            <button onClick={handleButton}>확인</button>
          </div>
        </div>
      </div>
      <div className="findAccountText">
        <span onClick={() => handleHistory("/add-account")}>
          이미 계좌가 있으신가요?
          <span> 계좌 찾기</span>
        </span>
      </div>
    </>
  );
};

export default CreateAccount;
