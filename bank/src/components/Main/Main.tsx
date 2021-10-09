import MainListItem from "./MainListItem";
import useMainList from "hooks/main/useMainList";

import "./Main.scss";
import { useState } from "react";

const Main = (): JSX.Element => {
  const { MainListDumi } = useMainList();
  const [isMore, setIsMore] = useState(false);
  const handleMore = () => {
    if (isMore) {
      setIsMore(false);
    } else {
      setIsMore(true);
    }
  };

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
        <div
          className={!isMore ? "isMore" : "isntMore"}
          onClick={() => handleMore()}
        >
          open
        </div>
        <div className={isMore ? "isMore" : "isntMore"}>
          <div>content</div>
          <div onClick={() => handleMore()}>close</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
