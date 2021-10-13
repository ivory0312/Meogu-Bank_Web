import "./CreateAccount.scss";

const CreateAccount = () => {
  return (
    <>
      <div className="createAccount">
        <div className="createAccount-title">계좌 개설</div>
        <div className="createAccount-content">
          <div className="createAccount-content-input">
            계좌 이름을 입력해주세요
            <div className="createAccount-content-input-name">
              <input type="text" />
            </div>
          </div>
          <div className="createAccount-content-input">
            계좌의 비밀번호를 입력해주세요
            <div className="createAccount-content-input-pw">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
          <div className="createAccount-content-input">
            계좌의 비밀번호를 한 번 더 입력해주세요
            <div className="createAccount-content-input-pw">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
