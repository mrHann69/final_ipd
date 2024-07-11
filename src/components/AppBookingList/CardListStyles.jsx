import styled from "styled-components";

export const CardContainer = styled.div`
  width: 90%;
  padding-left: 10px;
  margin: 2px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  background-color: #def9c4;
  border-radius: 10px;
  color: black;
`;
export const CardInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  min-width: 100px;
  width: 70%;
  height: 70px;
  margin: 10px 20px;
  display: flex;
  border-radius: 10px;
  border: 5px solid #50b498;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: black;
    cursor: pointer;
    background-color: ${({ typebutton }) => (typebutton ? "red" : "#DEF9C4")};
`;
