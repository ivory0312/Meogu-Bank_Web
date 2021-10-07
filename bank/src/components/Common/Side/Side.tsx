import profileImage from "assets/defaultProfile.svg";
import Home from "assets/Home/Home";
import Money from "assets/Money/Money";
import { useHistory } from "react-router-dom";

import "./Side.scss";

const Side = (): JSX.Element => {
  const history = useHistory();
  const path: string = window.location.pathname;

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
        <div className="side-list-item">
          <Home props={path === "/" ? "#4880EE" : "#999999"} />
          <span>홈 화면</span>
        </div>
        <div className="side-list-item">
          <Money props="#999999" />
          <span>계좌 이체</span>
        </div>
      </div>
    </div>
  );
};

export default Side;
