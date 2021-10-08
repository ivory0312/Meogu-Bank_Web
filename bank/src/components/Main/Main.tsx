import "./Main.scss";
import MainListItem from "./MainListItem";

const Main = (): JSX.Element => {
  return (
    <div className="main">
      <div className="main-list">
        <div className="main-list-title">계좌</div>
        <MainListItem name="계좌 1" price="13,000" />
        <MainListItem name="계좌 1" price="13,000" />
        <MainListItem name="계좌 1" price="13,000" />
        <MainListItem name="계좌 1" price="13,000" />
        <MainListItem name="계좌 1" price="13,000" />
        <MainListItem name="계좌 1" price="13,000" />
        <MainListItem name="계좌 1" price="13,000" />
        <MainListItem name="계좌 1" price="13,000" />
      </div>
    </div>
  );
};

export default Main;
