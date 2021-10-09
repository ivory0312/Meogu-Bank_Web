import { useState } from "react";
import MainListItem from "./MainListItem";
import useMainList from "hooks/main/useMainList";
import { RiMore2Line } from "react-icons/ri";

import "./Main.scss";

const Main = (): JSX.Element => {
  const { MainListDumi } = useMainList();
  const [isMore, setIsMore] = useState<boolean>(false);
  let count: number = 0;
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
        <div className="main-list-content">
          {MainListDumi.map((data) => {
            if (count !== 4) {
              count += 1;
            } else {
              return;
            }
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
            더보기
          </div>
          <div className={isMore ? "isMore" : "isntMore"}>
            {MainListDumi.slice(4).map((data) => {
              return (
                <>
                  <MainListItem name={data.name} price={data.price} />
                </>
              );
            })}
            <div onClick={() => handleMore()}>간략히</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
