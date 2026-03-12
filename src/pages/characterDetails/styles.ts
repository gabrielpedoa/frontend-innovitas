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
  max-width: 700px;
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

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const ErrorMessage = styled.p`
  color: #ef4444;
  margin-top: 10px;
`;

export const InfoRow = styled.div`
  font-size: 16px;
  color: #a1a1aa;
  display: flex;
  width: 100%;
  gap: 2em;
`;

export const InfoInput = styled.input`
  width: 50%;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 6px;
  padding: 8px 10px;
  color: white;
  font-size: 14px;

  &:read-only {
    border: none;
    background: transparent;
    padding-left: 0;
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
