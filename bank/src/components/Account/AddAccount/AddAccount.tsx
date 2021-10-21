import ResidentNumber from "components/Common/ResidentNumber";
import useAccount from "hooks/Account/useAccount";

import "./AddAccount.scss";

const AddAccount = () => {
  const { checkPassword } = useAccount();

  return (
    <div className="createAccount">
      <div className="createAccount-title">계좌 추가</div>
      <div className="createAccount-content">
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
  );
};

export default AddAccount;
