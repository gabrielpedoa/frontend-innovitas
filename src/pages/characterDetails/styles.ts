import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  color: white;
`;

export const CharacterCard = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 40px;

  background: #16161a;
  border-radius: 16px;
  padding: 30px;
  max-width: 900px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  border-radius: 14px;
`;

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CharacterName = styled.h1`
  font-size: 32px;
`;

export const InfoRow = styled.div`
  font-size: 16px;
  color: #a1a1aa;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const ActionButton = styled.button<{ danger?: boolean }>`
  background: ${({ danger }) => (danger ? "#ef4444" : "#8257e6")};
  border: none;
  padding: 12px 18px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
`;
