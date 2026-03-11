import { useEffect, useState } from "react";
import { dashboardService } from "../../../services/dashboard";
import { useAuthContext } from "../../../hooks/useAuthContext";
import type { IDashboard } from "../../../@types/dashboard";

export default function useHomeHook() {
  const { user } = useAuthContext();

  const [data, setData] = useState<IDashboard | null>(null);

  useEffect(() => {
    if (!user) return;

    async function loadDashboard() {
      const response = await dashboardService(user?.id!);
      setData(response);
    }

    loadDashboard();
  }, [user]);

  const userFavoriteCharacters = data?.myFavoritesCharacters ?? [];

  const cards = [
    {
      title: "Total Personagens",
      value: data?.totalCharacters,
    },
    {
      title: "Total Espisódios",
      value: data?.totalEpisodes,
    },
    {
      title: "Total Localizações",
      value: data?.totalLocations,
    },
    {
      title: "Meus Personagens Salvos",
      value: data?.userTotalCharacters ?? 0,
    },
  ];

  return {
    cards,
    userFavoriteCharacters,
  };
}
