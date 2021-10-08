import profileImage from "assets/defaultProfile.svg";
import Home from "assets/Home/Home";
import Money from "assets/Money/Money";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import "./Side.scss";

const Side = (): JSX.Element => {
  const history = useHistory();
  const path: string = window.location.pathname;

  const handleMenu = useCallback((url: string) => {
    history.push(url);
  }, []);

  return (
    <div className="side">
      <div className="side-profile">
        <img src={profileImage} alt="profileImage" />
        <div className="side-profile-info">
          <div>안녕하세요!</div>
          <div>
            <span className="side-profile-info-name">박상아</span> 님
          </div>
        </div>
      </div>
      <div className="side-list">
        <div className="side-list-item" onClick={() => handleMenu("/")}>
          <Home props={path === "/" ? "#4880EE" : "#999999"} />
          <span className={path === "/" ? "isMain" : ""}>홈 화면</span>
        </div>
        <div className="side-list-item" onClick={() => handleMenu("/send")}>
          <Money props={path === "/send" ? "#4880EE" : "#999999"} />
          <span>계좌 이체</span>
        </div>
      </div>
    </div>
  );
};

export default Side;
