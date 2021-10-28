import { useHistory } from "react-router-dom";

const useHandleHistory = () => {
  const history = useHistory();

  const handleHistory = (url: string) => {
    history.push(url);
  };

  return { handleHistory };
};

export default useHandleHistory;
