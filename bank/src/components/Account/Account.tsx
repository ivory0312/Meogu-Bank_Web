import "./Account.scss";
import useMainList from "hooks/main/useMainList";

const Account = () => {
  const { MainListDummy } = useMainList();

  return (
    <div className="account">
      <div className="account-item">
        <div className="account-item-title">계좌 이체</div>
        <div className="account-item-content">
          <div>123</div>
        </div>
      </div>
    </div>
  );
};

export default Account;
