import React from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <h1>Welcome to Simple TO-DO!</h1>
      <Link to={"todo"}>Go to Todo Page! {"=>"}</Link>
    </Container>
  );
}

export default Home;
