import { useRecoilValue } from "recoil";
import { darkModeState } from "recoil/darkMode";
import IDefaultProfile from "assets/IDefaultProfile";
import MainList from "./MainList/MainList";

import "./Main.scss";

const Main = (): JSX.Element => {
  const darkMode = useRecoilValue<boolean>(darkModeState);

  return (
    <>
      <div className="main">
        <div className="main-header">
          <div className="main-header-profile">
            <div className="main-header-profile-image">
              <IDefaultProfile color={darkMode ? "#F1F1F3" : "#555555"} />
            </div>
            <div className="main-header-profile-name">
              <span>박상아</span> 님, <br />
              안녕하세요!
            </div>
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
