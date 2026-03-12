import styled, { keyframes } from "styled-components";

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

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  background: #16161a;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 0 20px rgba(130, 87, 230, 0.15);
  transition: 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 30px rgba(130, 87, 230, 0.35);
  }
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  color: #a1a1aa;
`;

export const CardValue = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-top: 8px;
`;

export const Section = styled.section`
  margin-top: 40px;
  text-align: center;
`;

export const FavoritesGrid = styled.div<{ hasFavorite?: boolean }>`
  margin-top: 20px;
  display: grid;
  grid-template-columns: ${({ hasFavorite }) =>
    hasFavorite ? "1fr" : "repeat(auto-fit, minmax(220px, 350px))"};
  gap: 20px;

  justify-content: center;
`;

export const CharacterCard = styled.div`
  background: #16161a;
  border-radius: 14px;
  overflow: hidden;
  transition: 0.2s;

  &:hover {
    transform: scale(1.04);
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 500px) {
    height: 150px;
  }
`;

export const CharacterName = styled.p`
  padding: 12px;
  font-weight: 500;
  text-align: center;
`;

const pulse = keyframes`
  0% { opacity: 0.7; transform: scale(0.98); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0.7; transform: scale(0.98); }
`;

export const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px;
  border-radius: 16px;

  backdrop-filter: blur(10px);
  background: rgba(20, 20, 20, 0.55);

  border: 1px solid rgba(255, 255, 255, 0.1);

  color: white;
  font-size: 18px;
  text-align: center;

  animation: ${pulse} 2.5s infinite;
`;
