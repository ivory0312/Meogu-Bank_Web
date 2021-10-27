import { useRecoilValue } from "recoil";
import { activeAccountStat } from "recoil/account";
import useMainList from "hooks/main/useMainList";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import "./Account.scss";

const Account = () => {
  const activeAccount = useRecoilValue<number>(activeAccountStat);
  const { MainListDummy } = useMainList();
  const index: number = activeAccount - 1;
  const history = useHistory();

  const handleHistory = () => {
    history.push("/");
  };

  return (
    <div className="account">
      <div className="account-home" onClick={handleHistory}>
        <IoIosArrowBack />
        <span>메인 화면으로</span>
      </div>
      <div className="account-title">계좌 이체</div>
      <div>
        {activeAccount === -1 ? (
          <></>
        ) : (
          <div className="account-info">
            <img src={MainListDummy[index].image} alt="" />
            <div className="account-info-name">
              <div>
                <span>{MainListDummy[index].name}</span>
                {MainListDummy[index].accountNumber}
              </div>
              <div>잔액 {MainListDummy[index].price.toLocaleString()} 원</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
