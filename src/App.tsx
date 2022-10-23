import React from "react";
import { GlobalStyle } from "./styles/global";
import Router from "./utils/routes";
import styled from "styled-components";

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
