import { ReactNode } from "react";
import "./PageTemplate.scss";

const PageTemplate = (children: { children: ReactNode }): JSX.Element => {
  return <div className="pageTemplate">{children.children}</div>;
};

export default PageTemplate;
