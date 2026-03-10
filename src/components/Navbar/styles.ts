import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;

  padding: 0 40px;

  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
`;

export const MenuButton = styled.button`
  color: white;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
