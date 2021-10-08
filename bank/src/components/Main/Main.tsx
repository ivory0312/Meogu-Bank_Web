import "./Main.scss";
import MainListItem from "./MainListItem";

const Main = (): JSX.Element => {
  return (
    <div className="main">
      <div className="main-list">
        <div className="main-list-title">계좌</div>
        <MainListItem />
      </div>
    </div>
  );
};

export default Main;
