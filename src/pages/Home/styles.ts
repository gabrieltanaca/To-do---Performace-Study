import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 4rem;
  }
  > a {
    font-size: 1.5rem;
    padding: 10px 50px;
    border-radius: 50px;
    background-color: #64b6ac;
    color: #fcfffd;
    transition: ease-in 250ms;

    &:hover {
      background-color: #c0fdfb;
      color: #246a73;
    }
  }
`;
