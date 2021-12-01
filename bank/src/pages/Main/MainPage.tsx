import PageTemplate from "components/Common/PageTemplate";
import Main from "components/Main";
import SignInPage from "pages/SignIn";
import { useRecoilValue } from "recoil";
import { isSignInState } from "recoil/sign";

const MainPage = (): JSX.Element => {
  const isSign = useRecoilValue(isSignInState);

  return (
    <>
      {isSign ? (
        <PageTemplate>
          <Main />
        </PageTemplate>
      ) : (
        <SignInPage />
      )}
    </>
  );
};

export default MainPage;
