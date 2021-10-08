import DGB from "assets/DGB.svg";

import "./MainListItem.scss";

const MainListItem = (props: { name: string; price: string }): JSX.Element => {
  return (
    <div className="mainListItem">
      <div className="mainListItem-item">
        <div className="mainListItem-item-image">
          <img src={DGB} alt="DGB" />
        </div>
        <div className="mainListItem-item-contents">
          <div>{props.name}</div>
          <div className="mainListItem-item-contents-price">
            {props.price} 원
          </div>
        </div>
      </div>
      <div className="mainListItem-button">송금</div>
    </div>
  );
};

export default MainListItem;
