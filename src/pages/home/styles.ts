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
`;

export const FavoritesGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
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
