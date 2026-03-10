import styled from "styled-components";
import bg from "../../assets/loginBg.webp";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background-image: url(${bg});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 20px;
  }
`;

export const AuthContent = styled.div`
  width: 420px;
  max-width: 100%;
  height: 100vh;

  background-color: rgba(224, 231, 235, 0.6);
  backdrop-filter: blur(5px);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    border-radius: 12px;
  }
`;

export const LoginTitle = styled.h2`
  color: #222;
  font-size: 28px;
  text-align: center;
`;

export const AuthForm = styled.form`
  padding: 40px;
  width: 100%;
  max-width: 360px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const VerifyUserHasAccountStyle = {
  textAlign: "center",
  cursor: "pointer",
  color: "#7c22fa",
  textDecoration: "underline",
  fontWeight: 500,
  transition: "0.2s",

  "&:hover": {
    color: "#5a00f7",
  },
};

export const SubmitButtonStyles = {
  height: "3.5em",
  background: "linear-gradient(135deg, #7b2ff7, #9b4dff)",
  color: "#fff",
  fontWeight: 600,
  "&:hover": {
    background: "linear-gradient(135deg, #6a24d9, #8c3ff5)",
  },
};
