import { useState } from "react";
import { ISignTypes } from "types/sign.type";
import useHandleHistory from "hooks/History/useHandleHistory";
import "./Sign.scss";

const SignIn = () => {
  const { handleHistory } = useHandleHistory();
  const [signInRequest, setSignInRequest] = useState<ISignTypes>({
    id: "",
    password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInRequest({
      ...signInRequest,
      [e.target.id]: e.target.value,
    });
    console.log(signInRequest);
  };

  return (
    <div className="sign">
      <div className="sign-title">로그인</div>
      <div className="sign-content">
        <table>
          <tr>
            <td>아이디</td>
            <td>
              <input
                id="id"
                type="text"
                value={signInRequest.id}
                onChange={handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                id="password"
                type="password"
                value={signInRequest.password}
                onChange={handleInput}
              />
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
