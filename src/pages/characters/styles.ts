import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  color: #fff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 320px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  background: #8257e6;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const SearchInput = styled.input`
  background: #16161a;
  border: 1px solid #27272a;
  border-radius: 10px;
  padding: 12px 16px;
  color: white;
  width: 280px;

  &:focus {
    outline: none;
    border-color: #8257e6;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CharactersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`;

export const CharacterCard = styled.div`
  background: #16161a;
  border-radius: 14px;
  overflow: hidden;
  transition: 0.2s;
  cursor: pointer;

  box-shadow: 0 0 20px rgba(130, 87, 230, 0.1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 30px rgba(130, 87, 230, 0.35);
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const CharacterInfo = styled.div`
  padding: 16px;
`;

export const CharacterName = styled.h3`
  font-size: 18px;
  margin-bottom: 6px;
`;

export const CharacterMeta = styled.p`
  font-size: 14px;
  color: #a1a1aa;
`;

export const Pagination = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export const PageButton = styled.button`
  background: #8257e6;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
