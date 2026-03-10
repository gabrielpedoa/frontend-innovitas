import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Index";
import { Container, Content } from "./styles";

function AppLayout() {
  return (
    <Container>
      <Navbar />

      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}

export default AppLayout;
