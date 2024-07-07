import styled from "styled-components";

export const AppTitle = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  padding: 5px 0px;
  background-color: #ff204e;
`;

export const AppContainerRow = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: row;
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-color: #00224d;
`;
export const AppButtons = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AppContainerForm = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Button = styled.button`
  min-width: 100px;
  width: 40%;
  height: 70px;
  margin: 10px 20px;
  display: flex;
  border-radius: 10px;
  border: 5px solid #5d0e41;
  background-color: #ff204e;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 50px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: white;
    cursor: pointer;
    background-color: blue};
  }
`;
