import { useEffect, useState } from "react";
import MainListItem from "components/Main/MainList/MainListItem";
import Add from "assets/add.svg";
import useHandleHistory from "hooks/History/useHandleHistory";
import useAccount from "hooks/Account/useAccount";

import "./MainList.scss";

const MainList = (props: { title: string; content: string }) => {
  const { responseAccounts } = useAccount();
  const { handleHistory } = useHandleHistory();

  const [isMore, setIsMore] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("165");

  const [mainList, setMainList] = useState<any>();

  useEffect(() => {
    responseAccounts().then((e) => {
      setMainList(e);
    });
  }, [mainList]);

  const handleMore = () => {
    if (isMore) {
      setIsMore(false);
      setHeight("165");
    } else {
      setIsMore(true);
      setHeight(String(85 * mainList.length));
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
        {mainList?.map((data: any) => {
          return (
            <>
              <MainListItem idx={data.idx} name={data.name} pay={data.pay} />
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
