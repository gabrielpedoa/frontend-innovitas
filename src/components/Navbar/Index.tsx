import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import HamburguerComponent from "./components/HamburguerComponent";
import {
  NavContainer,
  NavMenuButton,
  NavMenuItems,
  NavOverlay
} from "./styles";

type IMenu = {
  onClick: () => void;
  title: string;
};

function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuthContext();
  const [open, setOpen] = useState(false);

  function toggleOpenHamburguerMenu() {
    setOpen(!open);
  }

  const menu: IMenu[] = [
    { onClick: () => navigate("/"), title: "Home" },
    { onClick: () => navigate("/personagens"), title: "Personagens" },
    { onClick: () => navigate("/meus-personagens"), title: "Meus Personagens" },
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

        <div className="menu-right">
          <NavMenuButton id="logout" onClick={logout}>
            Logout
          </NavMenuButton>
        </div>
      </NavMenuItems>

      {open && <NavOverlay onClick={() => setOpen(false)} />}
    </NavContainer>
  );
}

export default Navbar;
