import useHandleHistory from "hooks/History/useHandleHistory";
import "./Sign.scss";

const SignIn = () => {
  const { handleHistory } = useHandleHistory();

  return (
    <div className="sign">
      <div className="sign-title">로그인</div>
      <div className="sign-content">
        <table>
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="password" />
            </td>
          </tr>
        </table>
      </div>
      <div className="sign-button">
        <button>로그인</button>
      </div>
      <span onClick={() => handleHistory("/sign-up")}>
        회원이 아니신가요? 회원가입하기
      </span>
    </div>
  );
};

export default SignIn;
