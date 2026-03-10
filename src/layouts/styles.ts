import styled from "styled-components";
import bg from "../assets/defaultBg.jpg";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  background-image: url(${bg});
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  padding: 30px;
`;