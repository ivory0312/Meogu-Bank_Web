import Account from "components/Account";
import PageTemplate from "components/Common/PageTemplate";
import SignInPage from "pages/SignIn";
import { useRecoilValue } from "recoil";
import { isSignInState } from "recoil/sign";

const AccountPage = () => {
  const isSign = useRecoilValue(isSignInState);

  return (
    <>
      {isSign ? (
        <PageTemplate>
          <Account />
        </PageTemplate>
      ) : (
        <SignInPage />
      )}
    </>
  );
};

export default AccountPage;
