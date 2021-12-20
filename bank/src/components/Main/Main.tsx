import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { darkModeState } from "recoil/darkMode";
import IDefaultProfile from "assets/IDefaultProfile";
import MainList from "./MainList/MainList";

import "./Main.scss";
import { isSignInState } from "recoil/sign";

const Main = (): JSX.Element => {
  const darkMode = useRecoilValue<boolean>(darkModeState);
  const setIsSignIn = useSetRecoilState<boolean>(isSignInState);

  const handleLogout = () => {
    setIsSignIn(false);
  };

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
          <div className="logout" onClick={handleLogout}>
            로그아웃
          </div>
        </div>
        <MainList title="계좌" content="계좌를 만들어보세요" />
      </div>
    </>
  );
};

export default Main;
