import type { IDashboard } from "../@types/dashboard";
import { Api } from "./api";

export async function dashboardService(userId: number): Promise<IDashboard> {
  const response = await Api.get(`/dashboard/${userId}`);
  return response.data;
}
