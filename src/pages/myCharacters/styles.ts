import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: #a1a1aa;
  margin-bottom: 30px;
`;

export const CharactersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`;

export const CharacterCard = styled.div`
  position: relative;
  background: #16161a;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;

  transition: 0.25s;

  box-shadow: 0 0 25px rgba(130, 87, 230, 0.15);

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 0 35px rgba(130, 87, 230, 0.45);
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
`;

export const CharacterMeta = styled.p`
  font-size: 14px;
  color: #a1a1aa;
`;

export const SavedBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  background: #22c55e;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 8px;

  padding: 6px 8px;
  color: white;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #ef4444;
  }
`;

export const EmptyState = styled.div`
  margin-top: 80px;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    color: #a1a1aa;
  }
`;
