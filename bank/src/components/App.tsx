import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import "styles/reset.scss";
import "styles/styleVariable/styleVariable.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
