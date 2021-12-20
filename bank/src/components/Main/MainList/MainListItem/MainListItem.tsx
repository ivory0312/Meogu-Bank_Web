import useHandleHistory from "hooks/History/useHandleHistory";
import "./MainListItem.scss";

const MainListItem = (props: {
  idx: number;
  name: string;
  pay: number;
}): JSX.Element => {
  const { handleHistory } = useHandleHistory();

  return (
    <div className="mainListItem" onClick={() => handleHistory(`/account`)}>
      <div className="mainListItem-item">
        <div
          className="mainListItem-item-image"
          style={{ backgroundColor: "#F9DC98" }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/886128260256264227/901298700511506492/unknown.png"
            alt="icon"
          />
        </div>
        <div className="mainListItem-item-contents">
          <div>{props.name}</div>
          <div className="mainListItem-item-contents-price">{props.pay} 원</div>
        </div>
      </div>
      <div className="mainListItem-button">송금</div>
    </div>
  );
};

export default MainListItem;
