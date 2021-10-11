import MainList from "./MainList/MainList";

import "./Main.scss";

const Main = (): JSX.Element => {
  return (
    <>
      <div className="main">
        <MainList title="계좌" content="계좌를 개설해보세요" isAccount={true} />
        <MainList
          title="저축"
          content="저축을 시작해보세요"
          isAccount={false}
        />
      </div>
    </>
  );
};

export default Main;
