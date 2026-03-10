import { Navigate, Route, Routes } from "react-router-dom";
import { useVerifyAuth } from "./hooks/useVerifyAuth";
import Home from "./pages/home/Home";
import { routes } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  const { authenticated, loading } = useVerifyAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={authenticated ? <Home /> : <Navigate to="/auth/login" />}
        />

        {routes.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={
              item.requireAuth && !authenticated ? (
                <Navigate to="/auth/login" />
              ) : (
                item.element
              )
            }
          />
        ))}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
