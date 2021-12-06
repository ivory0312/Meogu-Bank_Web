import useHandleHistory from "hooks/History/useHandleHistory";
import { useState } from "react";
import { ISignTypes } from "types/sign.type";
import "./Sign.scss";

const SignUp = () => {
  const { handleHistory } = useHandleHistory();
  const [signUpRequest, setSignUpRequest] = useState<ISignTypes>({
    id: "",
    password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpRequest({
      ...signUpRequest,
      [e.target.id]: e.target.value,
    });
    console.log(signUpRequest);
  };

  return (
    <div className="sign">
      <div className="sign-title">회원가입</div>
      <div className="sign-content">
        <table>
          <tr>
            <td>아이디</td>
            <td>
              <input
                id="id"
                type="text"
                value={signUpRequest.id}
                onChange={handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                id="id"
                type="text"
                value={signUpRequest.password}
                onChange={handleInput}
              />
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
