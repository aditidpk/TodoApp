import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  gap: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  height: 56px;
  flex: 0.98;
  border: ${({ isClicked }) => (isClicked ? "solid #FF2F00" : "none")};
  margin-left: 16px;
  border-radius: 10px;
  gap: 16px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: #f1f1f1;
  align-items: center;
  width: 298px;
`;

export const InputBox = styled.input`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  border: none;
  background-color: #f1f1f1;
  outline: none;
`;
