import { useRecoilState, useSetRecoilState } from "recoil";
import useMainList from "hooks/main/useMainList";
import { IAccountDataTypes } from "types/account.types";
import { accountDataState } from "recoil/account";
import useHandleHistory from "hooks/History/useHandleHistory";
import arrow from "assets/arrow.svg";
import useAccount from "hooks/Account/useAccount";

import "./Account.scss";

const Account = () => {
  const [accountData, setAccountData] =
    useRecoilState<IAccountDataTypes>(accountDataState);

  const { MainListDummy } = useMainList();
  const { handleHistory } = useHandleHistory();
  const { checkPassword } = useAccount();
  const index: string[] = window.location.pathname.split("/");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountData({
      ...accountData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSelect = (e: any) => {
    setAccountData({
      ...accountData,
      bank: e.target.value,
    });
  };

  const a = () => {
    console.log(accountData);
  };

  return (
    <div className="account">
      <span className="account-home" onClick={() => handleHistory("/")}>
        <img src={arrow} alt="arrow" />
        <span>메인 화면으로</span>
      </span>
      <div className="account-info">
        <img src={MainListDummy[Number(index[2])].image} alt="" />
        <div className="account-info-name">
          <div>
            <span>{MainListDummy[Number(index[2])].name}</span>
            {MainListDummy[0].accountNumber}
          </div>
          <div>
            잔액 {MainListDummy[Number(index[2])].price.toLocaleString()} 원
          </div>
        </div>
      </div>
      <div className="account-content">
        <div className="account-content-title">계좌 이체</div>
        <span>은행 선택</span>
        <select id="bank" onChange={handleSelect}>
          <option value="">은행을 선택해주세요</option>
          <option value="대구은행">대구은행</option>
          <option value="카카오뱅크">카카오뱅크</option>
          <option value="토스뱅크">토스뱅크</option>
          <option value="케이뱅크">케이뱅크</option>
          <option value="부산은행">부산은행</option>
        </select>
        <span className="createAccount-content-input">
          계좌 번호 <span> - 를 제외하고 작성해주세요</span>
        </span>
        <input type="text" id="accountNumber" onChange={handleInput} />
        <span>보낼 금액</span>
        <div className="account-content-price">
          <input type="text" id="price" maxLength={10} onChange={handleInput} />
          <span>원</span>
        </div>
        <div
          className={
            checkPassword()
              ? "createAccount-content-button"
              : "createAccount-content-button inactive"
          }
        >
          <button onClick={a}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
