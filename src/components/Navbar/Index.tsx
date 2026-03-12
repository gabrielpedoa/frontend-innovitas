import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import HamburguerComponent from "./components/HamburguerComponent";
import {
  NavContainer,
  NavMenuButton,
  NavMenuItems,
  NavOverlay,
} from "./styles";

type IMenu = {
  onClick: () => void;
  title: string;
};

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();
  const [open, setOpen] = useState(false);

  function toggleOpenHamburguerMenu() {
    setOpen(!open);
  }

  function verifyAuthToNavigate() {
    if (!user) return navigate("/auth/login");
    navigate("/meus-personagens");
    toggleOpenHamburguerMenu();
  }

  function navigateTo(path: string) {
    if (path === "home") {
      navigate("/");
      toggleOpenHamburguerMenu();
      return;
    }
    navigate("/personagens");
    toggleOpenHamburguerMenu();
    return;
  }

  const menu: IMenu[] = [
    { onClick: () => navigateTo("home"), title: "Home" },
    { onClick: () => navigateTo("personagens"), title: "Personagens" },
    { onClick: () => verifyAuthToNavigate(), title: "Meus Personagens" },
  ];

  return (
    <NavContainer>
      <HamburguerComponent toggleOpen={toggleOpenHamburguerMenu} open={open} />

      <NavMenuItems open={open}>
        <div className="menu-left">
          {menu.map((element) => (
            <NavMenuButton key={element.title} onClick={element.onClick}>
              {element.title}
            </NavMenuButton>
          ))}
        </div>

        {user && (
          <div className="menu-right">
            <div>
              <p id="saudacao">Olá, {user.name}</p>
              <NavMenuButton id="logout" onClick={logout}>
                Sair
              </NavMenuButton>
            </div>
          </div>
        )}
        {!user && (
          <div className="menu-right">
            <NavMenuButton onClick={() => navigate("/auth/login")}>
              Login | Cadatro
            </NavMenuButton>
          </div>
        )}
      </NavMenuItems>

      {open && <NavOverlay onClick={() => setOpen(false)} />}
    </NavContainer>
  );
}

export default Navbar;
