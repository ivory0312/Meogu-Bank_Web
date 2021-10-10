import { useState } from "react";
import MainListItem from "./MainListItem";
import useMainList from "hooks/main/useMainList";

import "./Main.scss";

const Main = (): JSX.Element => {
  const { MainListDumi } = useMainList();
  const [isMore, setIsMore] = useState<boolean>(false);
  let count: number = 0;
  let height: string = "";
  const handleMore = () => {
    if (isMore) {
      setIsMore(false);
      height = "335";
    } else {
      setIsMore(true);
      height = String(85 * MainListDumi.length);
    }
  };

  return (
    <>
      <style></style>
      <div className="main">
        <div className="main-list">
          <div className="main-list-title">계좌</div>
          <div className="main-list-content">
            <input id="sidebar" type="checkbox" />
            <div className="on-off">
              <label htmlFor="sidebar">더보기</label>
            </div>
            <div className="sidebar">
              {MainListDumi.map((data) => {
                // if (count !== 4) {
                //   count += 1;
                // } else {
                //   return;
                // }
                return (
                  <>
                    <MainListItem name={data.name} price={data.price} />
                  </>
                );
              })}
              {/* <div className={isMore ? "isMore" : "isntMore"}>
            {MainListDumi.slice(4).map((data) => {
              return (
                <>
                <MainListItem name={data.name} price={data.price} />
                </>
                );
              })}
              <div onClick={() => handleMore()}>간략히</div>
            </div> */}
            </div>
            {/* <div
          className={!isMore ? "isMore" : "isntMore"}
          onClick={() => handleMore()}
        >
          더보기
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
