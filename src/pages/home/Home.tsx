import { useEffect, useState } from "react";
import type { IDashboard } from "../../@types/dashboard";
import { useAuthContext } from "../../hooks/useAuthContext";
import { dashboardService } from "../../services/dashboard";

function Home() {
  const { user } = useAuthContext();
  const [data, setData] = useState<IDashboard>();

  useEffect(() => {
    if (!user) return;

    async function loadDashboard() {
      const response = await dashboardService(user?.id!);
      setData(response);
    }

    loadDashboard();
  }, [user]);

  return (
    <div>
      <div>sdadsad</div>
      <div>sadsad</div>
      <div>sdadsad</div>
      <div>sadsad</div>
      <div>sdadsad</div>
      <div>sadsad</div>
      <div>sdadsad</div>
      <div>sadsad</div>
    </div>
  );
}

export default Home;
