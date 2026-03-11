import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Index";
import { AppLayoutContainer } from "./styles";

function AppLayout() {
  return (
    <AppLayoutContainer>
      <Navbar />

      <AppLayoutContainer>
        <Outlet />
      </AppLayoutContainer>
    </AppLayoutContainer>
  );
}

export default AppLayout;
