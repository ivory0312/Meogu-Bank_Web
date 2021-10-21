import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { darkModeState } from "recoil/darkMode";
import { MdLightMode, MdModeNight } from "react-icons/md";

import "./PageTemplate.scss";

const PageTemplate = (children: { children: ReactNode }): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useRecoilState<boolean>(darkModeState);

  const handleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setIsDarkMode(true);
    }
  };

  return (
    <div>
      <div className="darkModeButton" onClick={handleDarkMode}>
        {isDarkMode ? (
          <>
            <MdModeNight className="darkModeButton-icon" /> 다크모드
          </>
        ) : (
          <>
            <MdLightMode className="darkModeButton-icon" />
            라이트모드
          </>
        )}
      </div>
      <div>{children.children}</div>
    </div>
  );
};

export default PageTemplate;
