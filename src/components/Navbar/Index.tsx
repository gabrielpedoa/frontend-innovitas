import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Container, MenuButton } from "./styles";

type IMenu = {
  onClick: () => void;
  title: string;
};

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();

  const menu: IMenu[] = [
    { onClick: () => navigate("/"), title: "Home" },
    { onClick: () => navigate("/personagens"), title: "Personagens" },
    { onClick: () => navigate("/meus-personagens"), title: "Meus Personagens" },
    { onClick: logout, title: "Sair" },
  ];

  return (
    <Container>
      {menu.map((element) => (
        <MenuButton onClick={element.onClick}>{element.title}</MenuButton>
      ))}

      {!user && (
        <MenuButton onClick={() => navigate("/auth/login")}>
          Login / Cadastro
        </MenuButton>
      )}
    </Container>
  );
}

export default Navbar;
