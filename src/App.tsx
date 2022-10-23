import React from "react";
import { GlobalStyle } from "./styles/global";
import Router from "./utils/routes";

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
