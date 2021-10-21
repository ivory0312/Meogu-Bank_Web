import { ReactNode } from "react";
import Side from "../Side";

import "./PageTemplate.scss";

const PageTemplate = (children: { children: ReactNode }): JSX.Element => {
  return (
    <div className="pageTemplate">
      <div className="pageTemplate-side">
        <Side />
      </div>
      <div className="pageTemplate-contents">{children.children}</div>
    </div>
  );
};

export default PageTemplate;
