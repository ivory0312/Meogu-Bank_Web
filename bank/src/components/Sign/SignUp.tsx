import useHandleHistory from "hooks/History/useHandleHistory";
import "./Sign.scss";

const SignUp = () => {
  const { handleHistory } = useHandleHistory();

  return (
    <div className="sign">
      <div className="sign-title">회원가입</div>
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
        <button>회원가입</button>
      </div>
      <span onClick={() => handleHistory("/sign-in")}>
        회원이신가요? 로그인하기
      </span>
    </div>
  );
};

export default SignUp;
