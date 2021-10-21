import DGB from "assets/DGB.svg";
import saving from "assets/saving.svg";

import "./MainListItem.scss";
import { useHistory } from "react-router-dom";

const MainListItem = (props: {
  name: string;
  price: number;
  isAccount: boolean;
}): JSX.Element => {
  const history = useHistory();

  const handleHistory = () => {
    history.push("/account");
  };
  return (
    <div className="mainListItem" onClick={handleHistory}>
      <div className="mainListItem-item">
        <div
          className="mainListItem-item-image"
          style={
            props.isAccount
              ? { backgroundColor: "#0261FF" }
              : { backgroundColor: "#F9DC98" }
          }
        >
          <img src={props.isAccount ? DGB : saving} alt="icon" />
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
