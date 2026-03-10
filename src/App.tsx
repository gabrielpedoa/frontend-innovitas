import { Navigate, Route, Routes } from "react-router-dom";
import { useVerifyAuth } from "./hooks/useVerifyAuth";
import AuthLayout from "./layouts/AuthLayout";
import { routes } from "./routes";
import AppLayout from "./layouts/AppLayout";
import GlobalStyle, { THEME } from "./styles/global";
import { ThemeProvider } from "@mui/material";

function App() {
  const { authenticated } = useVerifyAuth();

  return (
    <>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <Routes>
          <Route element={<AuthLayout />}>
            {routes
              .filter((route) => !route.requireAuth)
              .map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={authenticated ? <Navigate to="/" /> : route.element}
                />
              ))}
          </Route>

          <Route
            element={
              authenticated ? <AppLayout /> : <Navigate to="/auth/login" />
            }
          >
            {routes
              .filter((route) => route.requireAuth)
              .map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
