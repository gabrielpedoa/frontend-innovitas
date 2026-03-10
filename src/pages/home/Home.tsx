import { Button } from "@mui/material";
import { useAuthContext } from "../../hooks/useAuthContext";

function Home() {
  const { logout } = useAuthContext();
  return (
    <>
      <Button onClick={logout}>lsdadsaogout</Button>;<p>oi</p>
    </>
  );
}

export default Home;
