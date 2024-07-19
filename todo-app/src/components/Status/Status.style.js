import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 24px;
  height: 28px;
`;

export const PillContainer = styled.div`
  display: flex;
  flex: 0.8;
  gap: 16px;
`;

export const StatusPill = styled.div`
  border-radius: 25px;
  background-color: ${({ isSelected }) => (isSelected ? "#ff2f00" : "white")};
  border-style: solid;
  width: auto;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 24px;
  padding-right: 24px;
  color: ${({ isSelected }) => (isSelected ? "white" : "#ff2f00")};
`;
