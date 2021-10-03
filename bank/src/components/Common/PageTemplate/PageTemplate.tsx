import { ReactNode } from "react";
import "./PageTemplate.scss";

const PageTemplate = ({ chidren }: any): JSX.Element => {
  return <div className="pageTemplate">{chidren}</div>;
};

export default PageTemplate;
