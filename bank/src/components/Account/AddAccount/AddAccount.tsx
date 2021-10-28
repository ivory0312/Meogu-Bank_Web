import ResidentNumber from "components/Common/ResidentNumber";
import useAccount from "hooks/Account/useAccount";
import useHandleHistory from "hooks/History/useHandleHistory";
import arrow from "assets/arrow.svg";

const AddAccount = () => {
  const { checkPassword } = useAccount();
  const { handleHistory } = useHandleHistory();

  return (
    <>
      <div className="createAccount">
        <span className="createAccount-home" onClick={() => handleHistory("/")}>
          <img src={arrow} alt="arrow" />
          <span>메인 화면으로</span>
        </span>
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

export default AddAccount;
