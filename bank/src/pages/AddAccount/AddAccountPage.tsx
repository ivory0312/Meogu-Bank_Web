import AddAccount from "components/Account/AddAccount";
import PageTemplate from "components/Common/PageTemplate";
import SignInPage from "pages/SignIn";
import { useRecoilValue } from "recoil";
import { isSignInState } from "recoil/sign";

const AddAccountPage = () => {
  const isSign = useRecoilValue(isSignInState);

  return (
    <>
      {isSign ? (
        <PageTemplate>
          <AddAccount />
        </PageTemplate>
      ) : (
        <SignInPage />
      )}
    </>
  );
};

export default AddAccountPage;
