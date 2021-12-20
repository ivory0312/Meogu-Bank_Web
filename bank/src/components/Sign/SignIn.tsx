import { useState } from "react";
import { ISignTypes } from "types/sign.type";
import useHandleHistory from "hooks/History/useHandleHistory";
import useAuth from "hooks/Auth/useAuth";
import { useSetRecoilState } from "recoil";
import { isSignInState, tokenState } from "recoil/sign";

import "./Sign.scss";

const SignIn = () => {
  const { requestSignIn } = useAuth();
  const { handleHistory } = useHandleHistory();
  const [signInRequest, setSignInRequest] = useState<ISignTypes>({
    id: "",
    password: "",
  });
  const setIsSignIn = useSetRecoilState(isSignInState);
  const setToken = useSetRecoilState(tokenState);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInRequest({
      ...signInRequest,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = () => {
    const result = requestSignIn(signInRequest);
    result
      .then((e) => {
        localStorage.setItem("token", e.token);
        setIsSignIn(true);
      })
      .catch((error) => {
        alert(error);
      });

    console.log(result);
  };

  return (
    <div className="sign">
      <div className="sign-title">로그인</div>
      <div className="sign-content">
        <div className="sign-content-input">
          <span>아이디</span>
          <input
            id="id"
            value={signInRequest.id}
            onChange={handleInput}
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="sign-content-input">
          <span>비밀번호</span>
          <input
            id="password"
            value={signInRequest.password}
            onChange={handleInput}
            type="password"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="sign-button">
        <button onClick={handleClick}>로그인</button>
      </div>
      <span className="textButton" onClick={() => handleHistory("/sign-up")}>
        회원이 아니신가요? 회원가입하기
      </span>
    </div>
  );
};

export default SignIn;
