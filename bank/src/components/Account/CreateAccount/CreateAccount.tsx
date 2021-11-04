import useAccount from "hooks/Account/useAccount";
import ResidentNumber from "components/Common/ResidentNumber";
import useHandleHistory from "hooks/History/useHandleHistory";
import arrow from "assets/arrow.svg";

import "./CreateAccount.scss";
import PasswordInput from "components/Common/InputBox/PasswordInput/PasswordInput";

const CreateAccount = () => {
  const { checkPassword } = useAccount();
  const { handleHistory } = useHandleHistory();

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
            <PasswordInput isCheck={false} />
          </div>
          <div className="createAccount-content-input">
            계좌의 비밀번호를 한 번 더 입력해주세요
            <PasswordInput isCheck={true} />
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
