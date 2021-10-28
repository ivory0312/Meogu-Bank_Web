import { useCallback, useState } from "react";
import MainListItem from "components/Main/MainList/MainListItem";
import useMainList from "hooks/main/useMainList";
import Add from "assets/add.svg";
import useHandleHistory from "hooks/History/useHandleHistory";

import "./MainList.scss";

const MainList = (props: {
  title: string;
  content: string;
  isAccount: boolean;
}) => {
  const { MainListDummy } = useMainList();
  const { handleHistory } = useHandleHistory();

  const [isMore, setIsMore] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("165");

  const handleMore = () => {
    if (isMore) {
      setIsMore(false);
      setHeight("165");
    } else {
      setIsMore(true);
      setHeight(String(85 * MainListDummy.length));
    }
  };

  return (
    <div className="mainList">
      <div className="mainList-title">
        <div>{props.title}</div>
        <div className="mainList-title-button" onClick={() => handleMore()}>
          {isMore ? "간략히" : "더보기"}
        </div>
      </div>
      <div className="mainList-content" style={{ height: `${height}px` }}>
        {MainListDummy.map((data) => {
          return (
            <>
              <MainListItem
                idx={data.idx}
                name={data.name}
                price={data.price}
                image={data.image}
                isAccount={props.isAccount}
              />
            </>
          );
        })}
      </div>
      <div
        className="mainListItem"
        onClick={() => handleHistory("/create-account")}
      >
        <div className="mainListItem-item">
          <div className="mainList-icon">
            <img src={Add} alt="Add" />
          </div>
          <div className="mainList-text">{props.content}</div>
        </div>
      </div>
    </div>
  );
};

export default MainList;
