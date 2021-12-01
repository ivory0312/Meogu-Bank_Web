import CreateAccount from "components/Account/CreateAccount";
import PageTemplate from "components/Common/PageTemplate";
import SignInPage from "pages/SignIn";
import { useRecoilValue } from "recoil";
import { isSignInState } from "recoil/sign";

const CreateAccountPage = () => {
  const isSign = useRecoilValue(isSignInState);

  return (
    <>
      {isSign ? (
        <PageTemplate>
          <CreateAccount />
        </PageTemplate>
      ) : (
        <SignInPage />
      )}
    </>
  );
};

export default CreateAccountPage;
