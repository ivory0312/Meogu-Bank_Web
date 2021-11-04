import useMainList from "hooks/main/useMainList";

const useAccount = () => {
  const { MainListDummy } = useMainList();

  const checkPassword = (value: string[], idx: number) => {
    const passwordArray = value.filter((data) => data !== "");
    if (
      MainListDummy[idx].password ===
      passwordArray.toString().replace(/\,/g, "")
    ) {
      return true;
    }
    console.log(
      idx,
      MainListDummy[idx].password,
      passwordArray.toString().replace(/\,/g, "")
    );

    return false;
  };

  const checkCreatePassword = () => {
    return true;
  };

  return { checkPassword, checkCreatePassword };
};

export default useAccount;
