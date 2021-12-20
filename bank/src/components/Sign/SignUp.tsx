import { useRecoilState } from "recoil";
import useAuth from "hooks/Auth/useAuth";
import useHandleHistory from "hooks/History/useHandleHistory";
import "./Sign.scss";
import { signUpState } from "recoil/sign";
import { ISignUpType } from "types/sign.type";

const SignUp = () => {
  const { handleHistory } = useHandleHistory();
  const { requestSignUp, responseCheck } = useAuth();
  const [signUpRequest, setSignUpRequest] =
    useRecoilState<ISignUpType>(signUpState);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpRequest({
      ...signUpRequest,
      [e.target.id]: e.target.value,
    });
    console.log(signUpRequest);
  };

  const handleCheck = () => {
    responseCheck(signUpRequest.id)
      .then(() => {
        alert("사용가능합니다!");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleNext = () => {
    requestSignUp(signUpRequest)
      .then(() => {
        alert("회원가입 성공");
        handleHistory("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="sign">
      <div className="sign-title">회원가입</div>
      <div className="sign-content">
        <div className="sign-content-input">
          <span>아이디</span>
          <input
            id="id"
            placeholder="3~12자리, 영문+숫자 조합"
            value={signUpRequest.id}
            onChange={handleInput}
            type="text"
            autoComplete="off"
          />
          <button onClick={handleCheck}>아이디 중복</button>
        </div>
        <div className="sign-content-input">
          <span>비밀번호</span>
          <input
            id="password"
            placeholder="8~12자리, 영문+숫자+특수문자 조합"
            value={signUpRequest.password}
            onChange={handleInput}
            type="password"
            autoComplete="off"
          />
        </div>
        <div className="sign-content-input">
          <span>이름</span>
          <input
            id="name"
            value={signUpRequest.name}
            onChange={handleInput}
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="sign-content-input">
          <span>별명</span>
          <input
            id="nickname"
            value={signUpRequest.nickname}
            onChange={handleInput}
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="sign-content-input">
          <span>전화번호</span>
          <input
            id="phone"
            value={signUpRequest.phone}
            onChange={handleInput}
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="sign-content-input">
          <span>생년월일</span>
          <input
            id="birth"
            placeholder="주민등록번호 앞자리와 뒤 맨 앞자리"
            value={signUpRequest.birth}
            onChange={handleInput}
            type="text"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="sign-button">
        <button onClick={handleNext}>회원가입</button>
      </div>
      <span className="textButton" onClick={() => handleHistory("/sign-in")}>
        회원이신가요? 로그인하기
      </span>
    </div>
  );
};

export default SignUp;
