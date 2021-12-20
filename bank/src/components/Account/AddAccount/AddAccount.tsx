import ResidentNumber from "components/Common/ResidentNumber";
import useAccount from "hooks/Account/useAccount";
import useHandleHistory from "hooks/History/useHandleHistory";
import arrow from "assets/arrow.svg";
import isEmpty from "util/isEmpty";
import { useRecoilState, useRecoilValue } from "recoil";
import { ICreateAccountTypes, IFindAccountTypes } from "types/account.types";
import { createAccountState, findAccountState } from "recoil/account";

const AddAccount = () => {
  const [findAccountData, setFindAccountData] =
    useRecoilState<IFindAccountTypes>(findAccountState);
  const createAccount = useRecoilValue<ICreateAccountTypes>(createAccountState);
  const { handleHistory } = useHandleHistory();

  const isValueEmpty: boolean = isEmpty("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFindAccountData({
      name: e.target.value,
      residentNumber: "",
    });

    console.log(findAccountData);
  };

  return (
    <>
      <div className="createAccount">
        <span className="createAccount-home" onClick={() => handleHistory("/")}>
          <img src={arrow} alt="arrow" />
          <span>메인 화면으로</span>
        </span>
        <div className="createAccount-content">
          <div className="createAccount-content-title">계좌 찾기</div>
          <div className="createAccount-content-input">
            이름을 입력해주세요
            <div className="createAccount-content-input-name">
              <input
                name="name"
                value={findAccountData.name}
                type="text"
                onChange={handleInput}
                maxLength={5}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="createAccount-content-input">
            주민등록번호를 입력해주세요
            <ResidentNumber />
          </div>

          <div
            className={
              isValueEmpty
                ? "createAccount-content-button inactive"
                : "createAccount-content-button"
            }
          >
            <button>확인</button>
          </div>
        </div>
      </div>
      <div className="findAccountText">
        <span onClick={() => handleHistory("/create-account")}>
          계좌가 없으신가요?
          <span> 계좌 생성</span>
        </span>
      </div>
    </>
  );
};

export default AddAccount;
