import { useRecoilValue } from "recoil";
import { darkModeState } from "recoil/darkMode";
import MainList from "./MainList/MainList";
import IDefaultProfile from "assets/IDefaultProfile";

import "./Main.scss";

const Main = (): JSX.Element => {
  const darkMode = useRecoilValue<boolean>(darkModeState);

  return (
    <>
      <div className="main">
        <div className="main-profile">
          
          <div className="main-profile-image">
            <IDefaultProfile color={darkMode ? "#F1F1F3" : "#555555"} />
          </div>
          <div className="main-profile-name">
            <span>박상아</span> 님, <br />
            안녕하세요!
          </div>
          <div className="main-profile-account">이체하기</div>
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
