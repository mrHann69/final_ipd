import styled from "styled-components";

export const FormMain = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  padding: 5px 0px;
  border-radius: 10px;
  background-color: #def9c4;
`;
export const FormFields = styled.div`
  width: 40vw;
  height: auto;
  margin: 20px;
  gap: 10px;
  border-radius: 10px;
  background-color: #9cdba6;
  color: white;
  color: black;
`;

export const Field = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  padding: 5px 0px;

  input {
    margin-left: 20px;
    width: 50%;
    height: 20px;
    font-size: 25px;
    padding: 5px 0px;
  }
`;

export const FormButtom = styled.button`
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  padding: 5px 0px;
  transition: 0.3s;
  border-radius: 10px;
  border: 5px solid;

  &:hover {
    color: black;
    cursor: pointer;
    background-color: #a6ff96;
  }
`;
