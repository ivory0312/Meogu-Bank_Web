import useMainList from "hooks/main/useMainList";
import { useRecoilValue } from "recoil";
import { activeAccountStat } from "recoil/account";

import "./Account.scss";

const Account = () => {
  const activeAccount = useRecoilValue<number>(activeAccountStat);
  const { MainListDummy } = useMainList();
  const index: number = activeAccount - 1;
  console.log(activeAccount);

  return (
    <div className="account">
      <div className="account-title">계좌 이체</div>
      <div>
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
      </div>
    </div>
  );
};

export default Account;
