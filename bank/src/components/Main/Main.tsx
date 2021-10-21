import MainList from "./MainList/MainList";
import defaultProfile from "assets/defaultProfile.svg";

import "./Main.scss";

const Main = (): JSX.Element => {
  return (
    <>
      <div className="main">
        <div className="main-profile">
          <div className="main-profile-image">
            <img src={defaultProfile} alt="defaultProfile" />
          </div>
          <div className="main-profile-name">
            <span>박상아</span> 님, 안녕하세요!
          </div>
        </div>
        <MainList title="계좌" content="계좌를 개설해보세요" isAccount={true} />
        <MainList
          title="저축"
          content="저축을 시작해보세요"
          isAccount={false}
        />
      </div>
    </>
  );
};

export default Main;
