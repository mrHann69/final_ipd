import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  flex-direction: column;
  background-color: red;
`;

export const AppTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

export const AppButtons = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-beetween;
  align-items: center;
  background-color: green;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${(props) =>
    props.typeButton === "hotel" ? "red" : "blue"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
