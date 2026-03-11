import { useEffect, useState } from "react";
import type { IDashboard } from "../../../@types/dashboard";
import { useAuthContext } from "../../../hooks/useAuthContext";
import {
  dashboardAuthService,
  dashboardNotAuthService,
} from "../../../services/dashboard";

export default function useHomeHook() {
  const { user } = useAuthContext();

  const [data, setData] = useState<IDashboard | null>(null);

  useEffect(() => {
    if (!user) {
      async function loadDashboardWithoutUserId() {
        const response = await dashboardNotAuthService();
        setData(response);
      }
      loadDashboardWithoutUserId();
      return;
    }

    async function loadDashboardWithUserId() {
      const response = await dashboardAuthService(user?.id!);
      setData(response);
    }

    loadDashboardWithUserId();
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
    user,
  };
}
