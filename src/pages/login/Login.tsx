import { Button, TextField, Typography } from "@mui/material";
import { useAuthFormHook } from "./hooks/useLoginHook";
import {
  AuthContent,
  AuthForm,
  Container,
  LoginTitle,
  SubmitButtonStyles,
  VerifyUserHasAccountStyle,
} from "./styles";

export default function Login() {
  const { states, handlers } = useAuthFormHook();

  const toggleUserHasAccountText =
    states.mode === "login"
      ? "Não tem uma conta? Criar conta"
      : "Já tem uma conta? Fazer login";

  const modeParam = states.mode === "login" ? "register" : "login";

  const toggleTextButton = states.mode === "login" ? "Entrar" : "Criar Conta";

  return (
    <Container>
      <AuthContent>
        <AuthForm>
          <LoginTitle>Rick & Morty Portal</LoginTitle>

          {states.mode === "register" && (
            <TextField
              label="Nome"
              fullWidth
              value={states.form.name}
              onChange={(e) => handlers.handleChange("name", e.target.value)}
            />
          )}

          <TextField
            type="email"
            label="Email"
            fullWidth
            value={states.form.email}
            onChange={(e) => handlers.handleChange("email", e.target.value)}
          />

          <TextField
            type="password"
            label="Senha"
            fullWidth
            value={states.form.password}
            onChange={(e) => handlers.handleChange("password", e.target.value)}
          />

          {states.mode === "register" && (
            <TextField
              type="password"
              label="Confirme sua senha"
              fullWidth
              value={states.form.confirmedPassword}
              onChange={(e) =>
                handlers.handleChange("confirmedPassword", e.target.value)
              }
            />
          )}
          {states.error && (
            <Typography color="error" sx={{ textAlign: "center" }}>
              {states.error}
            </Typography>
          )}
          <Button
            sx={SubmitButtonStyles}
            variant="contained"
            onClick={handlers.handleSubmit}
          >
            {toggleTextButton}
          </Button>

          <Typography
            sx={VerifyUserHasAccountStyle}
            onClick={() => handlers.handleModeChange(modeParam)}
          >
            {toggleUserHasAccountText}
          </Typography>
        </AuthForm>
      </AuthContent>
    </Container>
  );
}
