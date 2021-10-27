import { useRecoilState } from "recoil";
import { activeAccountStat } from "recoil/account";
import useMainList from "hooks/main/useMainList";

import "./Account.scss";

const Account = () => {
  const [activeAccount, setActiveAccount] =
    useRecoilState<number>(activeAccountStat);
  const { MainListDummy } = useMainList();
  const index: number = activeAccount - 1;
  console.log(activeAccount);
  // componentWillUnmount()
  // setActiveAccount(-1);

  return (
    <div className="account">
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
