import { ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { routes } from "./routes";
import GlobalStyle, { THEME } from "./styles/global";
import Login from "./pages/login/Login";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />

      <Routes>
        {/* rotas com navbar */}
        <Route element={<AppLayout />}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        {/* rotas sem navbar */}
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
