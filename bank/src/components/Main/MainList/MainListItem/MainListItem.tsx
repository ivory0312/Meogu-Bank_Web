import saving from "assets/saving.svg";
import useHandleHistory from "hooks/History/useHandleHistory";

import "./MainListItem.scss";

const MainListItem = (props: {
  idx: number;
  name: string;
  price: number;
  isAccount: boolean;
  image: string;
}): JSX.Element => {
  const { handleHistory } = useHandleHistory();

  return (
    <div
      className="mainListItem"
      onClick={() => handleHistory(`/account/${props.idx - 1}`)}
    >
      <div className="mainListItem-item">
        <div
          className="mainListItem-item-image"
          style={{ backgroundColor: "#F9DC98" }}
        >
          <img src={props.isAccount ? props.image : saving} alt="icon" />
        </div>
        <div className="mainListItem-item-contents">
          <div>{props.name}</div>
          <div className="mainListItem-item-contents-price">
            {props.price.toLocaleString()} 원
          </div>
        </div>
      </div>
      <div className="mainListItem-button">송금</div>
    </div>
  );
};

export default MainListItem;
