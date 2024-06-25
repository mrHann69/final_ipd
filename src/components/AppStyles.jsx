import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  flex-direction: column;
  
  position: relative;
`;

export const AppTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  padding: 10px 0px;
`;

export const AppButtons = styled.div`
  /*width: 100%;
  height: 100px;*/
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  margin: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  &:hover {
    color: white;
    cursor: pointer;
    background-color: ${(props) =>
    props.typeButton === "hotel" ? "red" : "blue"};
  }
`;
