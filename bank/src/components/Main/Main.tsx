import { useState } from "react";
import MainListItem from "./MainListItem";
import useMainList from "hooks/main/useMainList";

import "./Main.scss";

const Main = (): JSX.Element => {
  const { MainListDumi } = useMainList();
  const [isMore, setIsMore] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("335");
  let count: number = 0;
  const handleMore = () => {
    if (isMore) {
      setIsMore(false);
      setHeight("335");
      console.log(height);
    } else {
      setIsMore(true);
      setHeight(String(85 * MainListDumi.length));
      console.log(height);
    }
  };

  return (
    <>
      <div className="main">
        <div className="main-list">
          <div className="main-list-title">
            <div>계좌</div>
            <div
              className="main-list-title-button"
              onClick={() => handleMore()}
            >
              {isMore ? "간략히" : "자세히"}
            </div>
          </div>
          <div className="main-list-content" style={{ height: `${height}px` }}>
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
        </div>
      </div>
    </>
  );
};

export default Main;
