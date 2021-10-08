import MainListItem from "./MainListItem";
import useMainList from "hooks/main/useMainList";

import "./Main.scss";

const Main = (): JSX.Element => {
  const { MainListDumi } = useMainList();

  return (
    <div className="main">
      <div className="main-list">
        <div className="main-list-title">계좌</div>
        {MainListDumi.map((data) => {
          return (
            <>
              <MainListItem name={data.name} price={data.price} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
