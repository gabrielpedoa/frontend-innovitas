import styled from "styled-components";
import bg from "../assets/defaultBg.jpg";

export const AppLayoutContainer = styled.div`
  min-height: 100%;
  width: 100%;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
`;

export const AppLayoutContent = styled.div`
  flex: 1;
  padding: 30px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;
