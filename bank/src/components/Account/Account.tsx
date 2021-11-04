import { useRecoilState, useRecoilValue } from "recoil";
import { accountDataState, passwordDataStat } from "recoil/account";
import PasswordInput from "components/Common/InputBox/PasswordInput/PasswordInput";
import arrow from "assets/arrow.svg";
import useMainList from "hooks/main/useMainList";
import useHandleHistory from "hooks/History/useHandleHistory";
import useAccount from "hooks/Account/useAccount";
import { IAccountDataTypes } from "types/account.types";
import isEmpty from "util/isEmpty";
import isNumber from "util/isNumber";

import "./Account.scss";

const Account = () => {
  const [accountData, setAccountData] =
    useRecoilState<IAccountDataTypes>(accountDataState);
  const passwordData = useRecoilValue(passwordDataStat);
  const { MainListDummy } = useMainList();
  const { handleHistory } = useHandleHistory();
  const { checkPassword } = useAccount();
  const index: string[] = window.location.pathname.split("/");
  const isValueEmpty = isEmpty(
    accountData.accountNumber && accountData.bank && accountData.price
  );

  const handleHome = () => {
    handleHistory("/");
    setAccountData({
      bank: "",
      price: "",
      accountNumber: "",
    });
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountData({
      ...accountData,
      [e.target.id]: isNumber(e.target.value).valueData,
    });
  };
  const handleSelect = (e: any) => {
    setAccountData({
      ...accountData,
      bank: e.target.value,
    });
  };
  const handleButton = () => {
    if (
      !isValueEmpty &&
      checkPassword(passwordData.password, Number(index[2]))
    ) {
      handleHistory("/");
      setAccountData({
        bank: "",
        price: "",
        accountNumber: "",
      });
    }
  };

  return (
    <div className="account">
      <span className="account-home" onClick={handleHome}>
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
        <input
          type="text"
          id="accountNumber"
          value={accountData.accountNumber}
          onChange={handleInput}
          autoComplete="off"
        />
        <span>보낼 금액</span>
        <div className="account-content-price">
          <input
            type="text"
            id="price"
            value={accountData.price}
            maxLength={10}
            onChange={handleInput}
            autoComplete="off"
          />
          <span>원</span>
        </div>
        <span>계좌 비밀번호</span>
        <PasswordInput isCheck={false} />
        <div
          className={
            checkPassword(passwordData.password, Number(index[2]))
              ? "createAccount-content-button"
              : "createAccount-content-button inactive"
          }
        >
          <button onClick={handleButton}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
