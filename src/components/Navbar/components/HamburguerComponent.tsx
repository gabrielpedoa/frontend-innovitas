import { NavHamburger } from "../styles";

export default function HamburguerComponent({
  toggleOpen,
  open,
}: {
  toggleOpen: () => void;
  open: boolean;
}) {
  return (
    <NavHamburger onClick={toggleOpen} open={open}>
      <span />
      <span />
      <span />
    </NavHamburger>
  );
}
