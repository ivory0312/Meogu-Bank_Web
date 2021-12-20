import useMainList from "hooks/main/useMainList";
import { useCallback } from "react";
import {
  getAccounts,
  postMakeAccount,
} from "../../lib/api/account/account.api";

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

    return false;
  };

  const checkCreatePassword = (value: string[], checkValue: string[]) => {
    if (value.join("") !== "" && value.join("") === checkValue.join("")) {
      return true;
    }
    return false;
  };

  const responseAccounts = useCallback(async () => {
    try {
      const { data } = await getAccounts();

      return data;
    } catch {
      throw "계좌 목록 불러오기 실패";
    }
  }, []);

  const requestMakeAccount = useCallback(async (body: object) => {
    try {
      const { data } = await postMakeAccount(body);

      return data;
    } catch {
      throw "계좌 생성에 실패했습니다";
    }
  }, []);

  return {
    checkPassword,
    checkCreatePassword,
    responseAccounts,
    requestMakeAccount,
  };
};

export default useAccount;
