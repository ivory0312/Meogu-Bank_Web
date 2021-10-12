import { useCallback, useState } from "react";
import MainListItem from "components/Main/MainList/MainListItem";
import useMainList from "hooks/main/useMainList";
import Add from "assets/add.svg";
import { useHistory } from "react-router-dom";

import "./MainList.scss";

const MainList = (props: {
  title: string;
  content: string;
  isAccount: boolean;
}) => {
  const { MainListDumi } = useMainList();
  const history = useHistory();
  const [isMore, setIsMore] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("165");
  const handleMore = () => {
    if (isMore) {
      setIsMore(false);
      setHeight("165");
      console.log(height);
    } else {
      setIsMore(true);
      setHeight(String(85 * MainListDumi.length));
      console.log(height);
    }
  };
  const handleMenu = useCallback((url: string) => {
    history.push(url);
  }, []);

  return (
    <div className="mainList">
      <div className="mainList-title">
        <div>{props.title}</div>
        <div className="mainList-title-button" onClick={() => handleMore()}>
          {isMore ? "간략히" : "자세히"}
        </div>
      </div>
      <div className="mainList-content" style={{ height: `${height}px` }}>
        {MainListDumi.map((data) => {
          return (
            <>
              <MainListItem
                name={data.name}
                price={data.price}
                isAccount={props.isAccount}
              />
            </>
          );
        })}
      </div>
      <div
        className="mainListItem"
        onClick={() => handleMenu("/create-account")}
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
